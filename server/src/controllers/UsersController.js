const { hash, compare } = require("bcryptjs");

const knex = require("../database/knex")
const AppError = require("../utils/AppError");

class UsersController {
    async create(request, response) {
        const { name, email, password, avatar } = request.body

        // Get all users with same email
        const usersWithEmail = await knex("users").where({ email })

        // Checking if the email already exist
        const checkUserExists = usersWithEmail.length > 0

        if (checkUserExists) {
            throw new AppError("This email already exists")
        }

        // Encrypting Password
        const hashedPassword = await hash(password, 8)

        await knex("users").insert({
            name,
            email,
            password: hashedPassword,
            avatar
        })

        return response.status(201).json()
    }

    async update(request, response) {
        const { name, email, password, old_password } = request.body
        const user_id = request.user.id

        const user = await knex("users").where({ id: user_id })

        // Checking if the user exist
        if (user.length == 0) {
            throw new AppError("User not found")
        }

        const userWithUpdateEmail = await knex("users").where({ email })

        // checking if the email is already in use
        if (userWithUpdateEmail.length > 0 && userWithUpdateEmail[0].id != user[0].id) {
            throw new AppError("This email is already in use")
        }

        user[0].name = name ?? user[0].name
        user[0].email = email ?? user[0].email

        if (password && !old_password) {
            throw new AppError("You need to enter the old password")
        }

        if (password && old_password) {
            const checkOldPassword = await compare(old_password, user[0].password)

            if (!checkOldPassword) {
                throw new AppError("Old password does not match")
            }

            user[0].password = await hash(password, 8)
        }

        await knex("users")
            .where({ id: user_id })
            .update({
                name: user[0].name,
                email: user[0].email,
                password: user[0].password,
                updated_at: knex.fn.now()
            })

        return response.json()
    }
}

module.exports = UsersController
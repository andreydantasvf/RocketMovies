const knex = require("../database/knex");

class MoviesNotesController {
    async create(request, response) {
        const { title, description, rating, tags } = request.body
        const user_id = request.user.id

        const [movie_id] = await knex("movie_notes").insert({
            title,
            description,
            rating,
            user_id
        })

        // returning a object to tags
        const tagsInsert = tags.map(name => {
            return {
                movie_id,
                name,
                user_id
            }
        })

        await knex("movie_tags").insert(tagsInsert)

        response.json()
    }

    async show(request, response) {
        const { id } = request.params

        const movie = await knex("movie_notes").where({ id }).first()
        const tags = await knex("movie_tags").where({ movie_id: id }).orderBy("name")

        return response.json({
            ...movie,
            tags
        })
    }

    async delete(request, response) {
        const { id } = request.params

        await knex("movie_notes").where({ id }).delete()

        return response.json()
    }

    async index(request, response) {
        const { title, tags } = request.query;
        const user_id = request.user.id

        let movies

        if (tags) {
            const filterTags = tags.split(',').map(tag => tag.trim())

            movies = await knex("movie_tags")
                .select([
                    "movie_notes.id",
                    "movie_notes.title",
                    "movie_notes.user_id"
                ])
                .where("movie_notes.user_id", user_id)
                .whereLike("movie_notes.title", `%${title}%`)
                .whereIn("name", filterTags)
                .innerJoin("movie_notes", "movie_notes.id", "movie_tags.movie_id")
                .orderBy("movie_notes.title")
        } else {
            movies = await knex("movie_notes")
                .where({ user_id })
                .whereLike("title", `%${title}%`)
                .orderBy("title")
        }

        const userTags = await knex("movie_tags").where({ user_id })
        const moviesWithTags = movies.map(movie => {
            const movieTags = userTags.filter(tag => tag.movie_id === movie.id)

            return {
                ...movie,
                tags: movieTags
            }
        })

        return response.json(moviesWithTags)
    }
}

module.exports = MoviesNotesController
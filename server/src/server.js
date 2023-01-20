require("express-async-errors");
const migrationsRun = require("./database/sqlite/migrations");
const AppError = require("./utils/AppError");

const cors = require("cors");
const express = require("express");
const routes = require("./routes");

migrationsRun()

const app = express()
app.use(express.json())
app.use(cors())
app.use(routes)

// standardizing the errors
app.use((error, request, response, next) => {
    // comparing the error with AppError to statusCode 400
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    console.error(error)

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))
const { Router } = require("express");

const MoviesTagsController = require("../controllers/MoviesTagsController");

const tagsRoutes = Router()

const moviesTagsController = new MoviesTagsController()

tagsRoutes.get("/:user_id", moviesTagsController.index)

module.exports = tagsRoutes
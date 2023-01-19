const { Router } = require("express");

const MoviesTagsController = require("../controllers/MoviesTagsController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const tagsRoutes = Router()

const moviesTagsController = new MoviesTagsController()

tagsRoutes.get("/", ensureAuthenticated, moviesTagsController.index)

module.exports = tagsRoutes
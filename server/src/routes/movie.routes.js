const { Router } = require("express");

const MoviesNotesController = require("../controllers/MoviesNotesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const moviesRoutes = Router()
moviesRoutes.use(ensureAuthenticated)

const moviesNotesController = new MoviesNotesController()

moviesRoutes.get("/", moviesNotesController.index)
moviesRoutes.post("/", moviesNotesController.create)
moviesRoutes.get("/:id", moviesNotesController.show)
moviesRoutes.delete("/:id", moviesNotesController.delete)

module.exports = moviesRoutes
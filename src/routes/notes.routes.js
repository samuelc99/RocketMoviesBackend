const { Router } = require("express")

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
const NotesController = require("../controllers/NotesController")

const notesRoutes = Router()

const notesController = new NotesController()

notesRoutes.use(ensureAuthenticated)

notesRoutes.post("/", notesController.create)
notesRoutes.get("/", notesController.index)
notesRoutes.delete("/:id", notesController.delete)
notesRoutes.get("/:id", notesController.show)


module.exports = notesRoutes 



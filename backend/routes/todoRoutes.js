import express from "express";
import { auth } from "../middleware/authMiddleware.js";
import {addTodo,getAllTodos,updateTodo,deleteTodo,toggleComplete} from "../controllers/todoController.js";

const router = express.Router();

router.use(auth);
router.post("/", addTodo);
router.get("/", getAllTodos);
router.put("/:id", updateTodo);
router.put("/toggle/:id", toggleComplete);
router.delete("/:id", deleteTodo);

export default router;

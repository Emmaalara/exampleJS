import express from 'express';
import { createTodo, listTodos } from '../controller/todos.js';

const router = express.Router();
router.get('/', listTodos);
router.post('/', createTodo);

export default router;
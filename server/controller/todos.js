import mongoose from 'mongoose';
import Todo from '../models/todos.js';

export const listTodos = async (req, res) => {
    try{
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error){
        res.status(404).json({error: error.message})
    }
}

export const createTodo = async (req, res) => {
    console.log(req.body)
    const todo = new Todo(req.body);
    try{
        await todo.save();
        res.status(201).json(todo);
    } catch (error){
        res.status(409).json({error: error.message})
    }
}
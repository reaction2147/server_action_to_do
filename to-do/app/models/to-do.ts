import mongoose, { Schema } from "mongoose";

const todo = new Schema({
    content: String,
 });
  
 const Todo = mongoose.models.Todo || mongoose.model('Todo', todo);

 export { Todo }
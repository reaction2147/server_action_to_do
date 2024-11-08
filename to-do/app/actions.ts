"use server";

import mongoose from "mongoose";
import { Todo } from "./models/to-do";
import {connectDB} from "./utils/dbconnect";

const insertToDo = async () => {
  try {
    const connect = await connectDB();
    const db = connect.db("TO-DO");
    const collection = db.collection("todos");

    const todo = new Todo({
      content: "test todo",
    });

    await collection.insertOne(todo)
    
  } catch (e) {
    console.error(e);
  } finally {
    await mongoose.disconnect();
  }
};

export { insertToDo }
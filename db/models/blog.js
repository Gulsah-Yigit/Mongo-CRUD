import mongoose from "mongoose";

const requiredString = { type: String, required: true };

const blogSchema = new mongoose.Schema({
    title: requiredString,
    snippet: requiredString,
    body: requiredString,
    ip: requiredString,
  },{ timestamps: true }
);

export const Blog = mongoose.model("Blog", blogSchema);
// Mongo is going to look at the name "Blog",
// then make it plural and lowercased,
// and look for that collection inside the db

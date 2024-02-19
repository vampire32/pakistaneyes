// NewsBlog.js

const mongoose = require("mongoose");

const NewsBlogs = new mongoose.Schema({
  id: { type: String, required: true, },
  title: { type: String, required: true, },
  content: { type: String, required: true, },
  blogimg: {type: String, required: true, },
});

const NewsBlog = mongoose.model("NewsBlog", NewsBlogs);

module.exports = NewsBlog;

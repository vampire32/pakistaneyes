// api.js

const express = require("express");
const NewsBlog = require("../model/NewsBlog");

const router = express.Router();

// Create a new news blog
router.post("/news", async (req, res) => {
  try {
    const { id, title, content, blogimg } = req.body;

    const newBlog = new NewsBlog({
      id:id,
      title:title,
      content:content,
      blogimg:blogimg,
    });

    const savedBlog = await newBlog.save();
    console.log(savedBlog);

    res.json(savedBlog);
  } catch (error) {
    console.error("Error creating news blog:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/news/:id", async (req, res) => {
  try {
    const newsBlog = await NewsBlog.findById(req.params.id);

    if (!newsBlog) {
      return res.status(404).json({ error: "News blog not found" });
    }

    res.json(newsBlog);
  } catch (error) {
    console.error("Error fetching news blog by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;

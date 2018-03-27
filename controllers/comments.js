const express = require("express");
const commentsRouter = express();
const Comments = require("../models/comments.js");
const auth = require("../services/auth.js");

commentsRouter.post("/:country/:city", Comments.addComment, (req, res) => {
  console.log("hitting comment put", res.locals.commentsData);
  res.render("city", {Comments: res.locals.commentsData})
});

module.exports = commentsRouter;
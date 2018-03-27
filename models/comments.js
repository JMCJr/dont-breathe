const db = require('../db/index.js');

const Comments = {};

Comments.findCommentByCity = (req, res, next) => {
  const cityComment = res.locals.data;
  db
    .manyOrNone(
      "SELECT * FROM comments (city) VALUES ($1) RETURNING id;",
      [city]
    )
    .then(data => {
      res.locals.findCommentsByCity = data;
      next();
    })
    .catch(err => {
      console.log(
        "Error encountered in findCommentByCity error:",
        err
      );
      next(err);
    });
};

Comments.addComment = (req, res, next) => {
  console.log("in Comments.addComment. req.body:", req.body);
  const userId = req.user.id;
  const city = req.body.city;
  const com_text = req.body.com_text;
  const air_qual = req.body.airQuality;
  db
    .one(
      "INSERT INTO comments (com_text, city, air_qual, user_id) VALUES ($1, $2, $3, $4) RETURNING id;",
      [com_text, city, air_qual, userId]
    )
    .then(result => {
      res.locals.CommentId = result.id;
      next();
    })
    .catch(err => {
      console.log(
        "Error encountered in Comments.addComment. error:",
        err
      );
      next(err);
    });
};

module.exports = Comments;
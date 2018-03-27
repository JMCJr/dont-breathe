const User = require('../models/user');
const router = require('express').Router();
const passport = require('passport');
const airQuality = require("../models/airQuality.js");
const Comments = require('../models/comments.js');
const auth = require('../services/auth');
// const userRouter = require("../models/user.js");
const userModelObject = require("../models/user.js");

// router.post(
//     '/',
//     passport.authenticate(
//         'local-signup', {
//             failureRedirect: '/users/new',
//             successRedirect: '/users/commentprofile'
//         }
//     )
// );

// router.get('/new', (req, res) => {
//     res.render('users/new');
// });

// router.get('/logout', (req, res) => {
//     req.logout();
//     res.redirect('/');
// });

// router.get('/login', (req, res) => {
//     res.render('users/login');
// });

// router.post('/login', passport.authenticate(
//     'local-login', {
//         failureRedirect: '/users/login',
//         successRedirect: '/users/commentprofile'
//     }
// ));

// router.get(
//     '/commentprofile',
//     auth.restrict,
//     Comments.findCommentByUser,
//     (req, res, next) => {
//         console.log('in GET at /users/commentprofile. res.locals:', res.locals);
//         res.render('users/commentprofile');
//     }
// );

// router.post(
//     "/:country/:city",
//     auth.restrict,
//     Comments.addComment,
//     (req, res, next) => {
//         res.send({ addCommentId: res.locals.addCommentId });
//     }
// );


module.exports = router;



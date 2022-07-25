const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');


router.get('/', (req, res) => {
  Post.findAll({
      attributes: [
          'id',
          'post_text',
          'title',
          'created_at',
          'tags'
        ],
      order: [[ 'created_at', 'DESC']],
      include: [
          {
              model: User,
              attributes: ['username']
          }
      ]
  })
  .then(dbPostData => {
    const posts = dbPostData.map(post => post.get({ plain: true }));
    res.render('blog', {
      posts,
      loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});



module.exports = router;
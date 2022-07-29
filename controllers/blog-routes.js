const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');

const withAuth = require('../utils/auth')


router.get('/', (req, res) => {
  Post.findAll({
      attributes: [
          'id',
          'post_text',
          'post_desc',
          'title',
          'created_at',
          'tags'
        ],
      order: [[ 'created_at', 'DESC']],
      include: [
          {
            model: User,
            attributes: [
              'username',
              'email'
            ]
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

router.get('/edit/:id', withAuth, (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'post_desc',
      'post_text',
      'title',
      'created_at',
    ],
    include: [
      {
        model: User,
        attributes: [
          'username',
          'email'
        ]
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      const post = dbPostData.get({ plain: true });
      res.render('edit-post', { post, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edituser', withAuth, (req, res) => {
  User.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.session.user_id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      const user = dbUserData.get({ plain: true });
      res.render('edit-user', {user, loggedIn: true});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  });



module.exports = router;
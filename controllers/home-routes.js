const router = require('express').Router();
const sequelize = require('../config/connection');
const { Athlete , Post, User } = require('../models');


router.get('/', (req, res) => {
  Post.findAll({
      attributes: [
          'id',
          'post_desc',
          'post_text',
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
    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
  
});

router.get('/post/:id', (req, res) => {
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
      'tags'
    ],
    include: [
      {
        model: User,
        attributes: [
          'username',
          'email',
          'bio'
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
      res.render('single-post', {
          post,
          loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/', (req, res) => {
  Athlete.findAll({
      attributes: [
          'id',
          'ath_name',
          'ath_desc',
          'ath_info',
          'pic_title'
        ],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
  })
  .then(dbAthleteData => {
    const athletes = dbAthleteData.map(athlete => athlete.get({ plain: true }));
    res.render('our-athletes', {
      athletes,
      loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

router.get('/edit/:id', (req, res) => {
  Athlete.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'ath_name',
      'ath_desc',
      'ath_info',
      'pic_title'
    ],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
  })
    .then(dbAthleteData => {
      if (!dbAthleteData) {
        res.status(404).json({ message: 'No athlete found with this id' });
        return;
      }
      const athlete = dbAthleteData.get({ plain: true });
      res.render('edit-athlete', { athlete, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
if (req.session.loggedIn) {
  res.redirect('/');
  return;
}

res.render('signup');
});

router.get('/blog', (req, res) => {
  res.render('blog')
});
router.get('/about-us', (req, res) => {
  res.render('about-us')
});
router.get('/our-athletes', (req, res) => {
  res.render('our-athletes')
});
router.get('/contact', (req, res) => {
  res.render('contact')
});
router.get('/login', (req, res) => {
  res.render('login')
});

module.exports = router;
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Athlete, User } = require('../models');

const withAuth = require('../utils/auth')



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

router.get('/edit/:id', withAuth, (req, res) => {
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
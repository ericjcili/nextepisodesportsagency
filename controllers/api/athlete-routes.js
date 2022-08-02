const router = require('express').Router();
const { User, Athlete } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

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
    .then(dbAthleteData => res.json(dbAthleteData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
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
        res.json(dbAthleteData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.post('/', withAuth, (req, res) => {
    Athlete.create({
        ath_name: req.body.ath_name,
        ath_desc: req.body.ath_desc,
        ath_info: req.body.ath_info,
        pic_title: req.body.pic_title,
    })
    .then(dbAthleteData => res.json(dbAthleteData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
    Athlete.update(req.body,
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbAthleteData => {
        if (!dbAthleteData) {
            res.status(404).json({ message: 'No athlete found with this id' });
            return;
        }
        res.json(dbAthleteData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

router.delete('/:id', withAuth, (req, res) => {
    Athlete.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbAthleteData => {
        if (!dbAthleteData) {
          res.status(404).json({ message: 'No athlete found with this id' });
          return;
        }
        res.json(dbAthleteData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;
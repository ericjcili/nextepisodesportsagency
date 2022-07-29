const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');

const withAuth = require('../utils/auth')

router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: {
          user_id: req.session.user_id
        },
        attributes: [
          'id',
          'post_text',
          'post_desc',
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
          const posts = dbPostData.map(post => post.get({ plain: true }));
          res.render('dashboard', { posts, loggedIn: true });
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
              attributes: ['username']
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
                    attributes: ['username']
                }
            ]
        })
        .then(dbPostData => {
          const posts = dbPostData.map(post => post.get({ plain: true }));
          res.render('our-services', {
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
                attributes: ['username']
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

      module.exports = router;
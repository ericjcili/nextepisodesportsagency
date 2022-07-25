const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const blogRoutes = require('./blog-routes.js');

router.use('/api', apiRoutes);
router.use('/blog', blogRoutes);
router.use('/', homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
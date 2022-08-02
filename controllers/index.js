const router = require('express').Router();
const apiRoutes = require('./api');
const ourathletesRoutes = require('./our-athletes-routes.js');
const homeRoutes = require('./home-routes.js');
const blogRoutes = require('./blog-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const newAthleteRoutes = require('./new-athlete-routes.js');
const fullAthleteRoutes = require('./full-athlete-routes.js');
const singlepostRoutes = require('./single-post-routes.js');
const aboutusRoutes = require('./about-us-routes.js');
const contactRoutes = require('./contact-routes.js');

router.use('/post', singlepostRoutes);
router.use('/athlete', fullAthleteRoutes);
router.use('/api', apiRoutes);
router.use('/blog', blogRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/new-athlete', newAthleteRoutes);
router.use('/our-athletes', ourathletesRoutes);
router.use('/about-us', aboutusRoutes);
router.use('/contact', contactRoutes);
router.use('/', homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
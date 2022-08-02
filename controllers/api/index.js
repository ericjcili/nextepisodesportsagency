const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const athleteRoutes = require('./athlete-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/athletes', athleteRoutes);

module.exports = router;
const router = require('express').Router();
const apiRoutes = require('./api/index-routes');

router.use('/api', apiRoutes);

module.exports = router;
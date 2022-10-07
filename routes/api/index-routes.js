const router = require('express').Router();
const locationRoute = require('./location-route');
const travellerRoute = require('./traveller-route');
const tripRoute = require('./trip-route');

router.use('/locations', locationRoute);
router.use('/travellers', travellerRoute);
router.use('/trips', tripRoute);

module.exports = router;
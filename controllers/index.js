//this file will provide routes definitions for the 
//dashboard
//home
//api

const router = require('express').Router();

const apiRoutes = require('./api');

const homeRoutes = require('./home-routes.js.js');
//requiring dashboard routes
const dashboardRoutes = require('./dashboard-routes.js.js');
//specifying that we will use the dashboardRoutes when there is a /dashboar at the end of address
router.use('/dashboard', dashboardRoutes);

router.use('/', homeRoutes);

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
const express = require('express');
const SiteController = require('../app/controllers/SiteController');
const router = express.Router();




router.use('/home',SiteController.home);
router.use('/album',SiteController.album);



module.exports =  router;








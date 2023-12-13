const express = require('express');
const router = express.Router();
const newsController = require('../../src/controllers/NewsController');

router.use('/',newsController.index);
router.use('/:slug',newsController.notfound);


module.exports = router;

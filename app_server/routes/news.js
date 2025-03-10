var express = require('express');
var router = express.Router();
const controller = require('../controllers/news');

/* GET room page. */
router.get('/', controller.news);

module.exports = router;
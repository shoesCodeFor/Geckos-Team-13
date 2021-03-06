const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  try {
    res.render('index', { title: 'Express' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

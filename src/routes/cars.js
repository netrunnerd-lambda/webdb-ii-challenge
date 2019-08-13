const router = require('express').Router();

const cars = require('../controllers/cars');

router.get('/', cars.all);

module.exports = router;
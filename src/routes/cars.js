const router = require('express').Router();

const cars = require('../controllers/cars');

router.get('/', cars.all);
router.get('/:id', cars.one);
router.delete('/:id', cars.remove);
router.post('/', cars.submit);

module.exports = router;
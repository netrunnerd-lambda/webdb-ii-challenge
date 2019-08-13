const router = require('express').Router();

router.get('/', (req, res) => res.send("[*] Sergei's Motor Emporium [*]\n        Welcome, comrade!"));

module.exports = router;
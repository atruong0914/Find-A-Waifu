const { Router } = require('express');
const controllers = require('../controllers/waifuController')
const router = Router();

router.get('/', (req, res) => res.send('blah blah'))

router.get('/waifus', controllers.getAllWaifus)

module.exports = router;
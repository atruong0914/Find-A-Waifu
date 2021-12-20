const { Router } = require('express');
const { getAllGifts, getGiftById, createGift, updateGift, deleteGift, getAllWaifus } = require('../controllers')

const router = Router();

router.get('/', (req, res) => res.send('blah blah'))


router.get('/waifus', getAllWaifus)


router.get('/gifts', getAllGifts)

router.post('/gifts/create', createGift)

router.get('/gifts/:id', getGiftById)

router.put('/gifts/:id', updateGift)

router.delete('/gifts/:id', deleteGift)

module.exports = router;
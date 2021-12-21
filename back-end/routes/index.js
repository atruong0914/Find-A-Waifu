const { Router } = require('express');
const { getAllGifts, getGiftById, createGift, updateGift, deleteGift, getAllWaifus, updateWaifu, deleteWaifu, getWaifuById, createWaifu} = require('../controllers')

const router = Router();

router.get('/', (req, res) => res.send('blah blah'))

// waifu routes
router.get('/waifus', getAllWaifus)

router.post('/waifus/create', createWaifu)

router.get('/waifus/:id', getWaifuById)

router.put('/waifus/:id', updateWaifu)

router.delete('/waifus/:id', deleteWaifu)

// gift routes
router.get('/gifts', getAllGifts)

router.post('/gifts/create', createGift)

router.get('/gifts/:id', getGiftById)

router.put('/gifts/:id', updateGift)

router.delete('/gifts/:id', deleteGift)



module.exports = router;
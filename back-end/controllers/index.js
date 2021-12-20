const { getAllGifts, getGiftById, createGift, updateGift, deleteGift } = require('./giftController')
const { getAllWaifus } = require('./waifuController')

module.exports = {
    getAllGifts,
    getGiftById,
    createGift,
    updateGift,
    deleteGift,
    getAllWaifus
}
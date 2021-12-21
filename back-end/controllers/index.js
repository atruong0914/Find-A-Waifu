const { getAllGifts, getGiftById, createGift, updateGift, deleteGift } = require('./giftController')
const { getAllWaifus, getWaifuById, createWaifu, updateWaifu, deleteWaifu } = require('./waifuController')

module.exports = {
    getAllGifts,
    getGiftById,
    createGift,
    updateGift,
    deleteGift,
    getAllWaifus,
    getWaifuById,
    createWaifu,
    updateWaifu,
    deleteWaifu
}
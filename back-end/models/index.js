const mongoose = require('mongoose');

const GiftSchema = require('./gift');
const WaifuSchema = require('./waifu');

const Gift = mongoose.model('Gift', GiftSchema);
const Waifu = mongoose.model('Waifu', WaifuSchema);

module.exports = {
    Gift,
    Waifu
}
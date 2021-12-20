const { Waifu } = require('../models');

const getAllWaifus = async (req, res) => {
    try {
        const waifus = await Waifu.find()
        return res.status(200).json({ waifus })
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

module.exports = {
    getAllWaifus
}
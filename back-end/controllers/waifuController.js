const { Waifu } = require('../models');

const createWaifu = async (req, res) => {
    try {
        const waifu = await new Waifu(req.body)
        await waifu.save()
        return res.status(201).json({
            waifu,
        });
    } catch (err) {
        return res.status(500).json({ err: err.message });
    }
}

const getAllWaifus = async (req, res) => {
    try {
        const waifus = await Waifu.find()
        return res.status(200).json({ waifus })
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

const getWaifuById = async (req, res) => {
    try {
        const { id } = req.params;
        const waifu = await Waifu.findById(id)
        if (waifu) {
            return res.status(200).json({waifu});
        }
        return res.status(404).send('This waifu does not exist');
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

const updateWaifu = async (req, res) => {
    try {
        const { id } = req.params;

        await Waifu.findByIdAndUpdate(id, req.body, { new: true }, (err, waifu) => {
            if (err){
                return res.status(500).send(err);
            }
            if (!waifu) {
                return res.status(500).send('waifu not found')
            }
            res.status(200).json(waifu);
        })
    } catch (err) {

    }
}

const deleteWaifu = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Waifu.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('waifu deleted');
        }
        throw new Error('waifu not found');
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

module.exports = {
    getAllWaifus,
    getWaifuById,
    createWaifu,
    updateWaifu,
    deleteWaifu
}
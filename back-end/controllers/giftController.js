const { Gift } = require('../models');

const createGift = async (req, res) => {
    try {
        const gift = await new Gift(req.body)
        await gift.save()
        return res.status(201).json({
            gift,
        });
    } catch (err) {
        return res.status(500).json({ err: err.message });
    }
}

const getAllGifts = async (req, res) => {
    try {
        const gifts = await Gift.find()
        return res.status(200).json({ gifts })
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

const getGiftById = async (req, res) => {
    try {
        const { id } = req.params;
        const gift = await Gift.findById(id)
        if (gift) {
            return res.status(200).json({ gift });
        }
        return res.status(404).send('This gift does not exist');
    } catch (err) {
        return res.status(500).send(err.message);
    }
}
const updateGift = async (req, res) => {
    try {
        const { id } = req.params;

        // console.log("UPDATING: ", id)
        // console.log(req.body)

        await Gift.findByIdAndUpdate(id, req.body, { new: true }, (err, gift) => {
            if (err) {
                return res.status(500).send(err)
            }
            if (!gift) {
                return res.status(500).send('Gift not found');
            }
            res.status(200).json(gift);
        })
    } catch (err) {
        // res.status(500).send(err.message);
    }
}

/*
const likeGift = async (req, res) => {
    try {
        const { id } = req.params;
        await Gift.findByIdAndUpdate(id, req.body, { new: true }, (err, gift) => {
            if (err) {
                return res.status(500).send(err)
            }
            if (!gift) {
                return res.status(500).send('no');
            }
            res.status(200).json(gift);
        })
    } catch (err) {
        // res.status(500).send(err.message);
    }
}
*/

const deleteGift = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Gift.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Gift deleted');
        }
        throw new Error('Gift not found');
    } catch (err) {
        return res.status(500).send(err.message);
    }
}


module.exports = {
    createGift,
    getAllGifts,
    getGiftById,
    updateGift,
    deleteGift
}

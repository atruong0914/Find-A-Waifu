const { Schema } = require('mongoose');

const GiftSchema = new Schema(
    {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
        img: { type: String, required: true },
        desc: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = GiftSchema;
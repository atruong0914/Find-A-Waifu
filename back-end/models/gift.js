const { Schema } = require('mongoose');

const GiftSchema = new Schema(
    {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
        desc: { type: String, required: true },
        img: { type: String, required: true },
        likes: {type: Number, required: true, default: 0}
    },
    { timestamps: true },
)

module.exports = GiftSchema;
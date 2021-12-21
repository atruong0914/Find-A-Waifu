const { Schema } = require('mongoose');

const WaifuSchema = new Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        dere: { type: String, required: true },
        origin: { type: String, required: true },
        img: { type: String, required: true },
        likes: { type: Number, required: true, default: 0 },
        dislikes: { type: Number, required: true, default: 0 }
    },
    { timestamps: true },
)

module.exports = WaifuSchema;
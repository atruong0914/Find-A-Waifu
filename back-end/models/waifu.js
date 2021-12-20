const { Schema } = require('mongoose');

const WaifuSchema = new Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        dere: { type: String, required: true },
        origin: { type: String, required: true },
        img: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = WaifuSchema;
const { Schema, model, Types } = require('mongoose');

const cartSchema = new Schema({
    ownerId: { type: String, required: [true, 'ownerId is required'], unique: true},
    bookIds: { type: [Types.ObjectId], ref:'Item', default: [] }
});

cartSchema.index({ ownerId: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
})

const Cart = model('Cart', cartSchema);

module.exports = Cart
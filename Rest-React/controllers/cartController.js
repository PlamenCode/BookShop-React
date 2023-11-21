const { addToCart, getAllBooksInCart, removeFromCart, checkBookInCart, toggleCart } = require('../services/cartService');
const parseError = require('../utils/parser');

const cartController = require('express').Router();

cartController.get('/toggle/:id/:bookId', async (req, res) => {
    try {
        const result = await toggleCart(req.params.id, req.params.bookId);
        return res.json(result);
    } catch (err) {
        const message = parseError(err)
        res.status(400).json({ message });
    }
})

cartController.get('/:id', async (req, res) => {
    const cart = await getAllBooksInCart(req.params.id);
    return res.json(cart);
});

cartController.get('/:id/:bookId', async (req, res) => {
    try {
        const result = await addToCart(req.params.id, req.params.bookId);
        return res.json(result); 
    } catch (err) {
        const message = parseError(err)
        res.status(400).json({ message });
    }
});

cartController.delete('/:id/:bookId', async (req, res) => {
    try {
        const result =  await removeFromCart(req.params.id, req.params.bookId);
        return res.json(result);
    } catch (err) {
        const message = parseError(err)
        res.status(400).json({ message });
    }
});

cartController.get('/check/:id/:bookId', async (req, res) => {
    try {
        const result = await checkBookInCart(req.params.id, req.params.bookId);
        return res.json(result);
    } catch (err) {
        const message = parseError(err)
        res.status(400).json({ message });
    }
});

module.exports = cartController;
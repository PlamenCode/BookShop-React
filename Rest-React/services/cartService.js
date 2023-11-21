const Cart = require("../models/Cart");
const itemService = require("./itemService");


async function toggleCart(userId, bookId){
    const cart = await Cart.findOne({ ownerId: userId });
    if(cart.bookIds.map(x => x.toString()).includes(bookId.toString())){
        cart.bookIds = cart.bookIds.map(x => x.toString()).filter(x => x !== bookId.toString());
        cart.save();
        return false;
    } else{
        cart.bookIds.push(bookId);
        cart.save();
        return true;
    }
}

async function addToCart(userId, bookId) {
    const cart = await Cart.findOne({ ownerId: userId });
    if(cart.bookIds.map(x => x.toString()).includes(bookId.toString())){
        return;
    }
    cart.bookIds.push(bookId);
    return cart.save();
};

async function removeFromCart(userId, bookId) {
    const cart = await Cart.findOne({ ownerId: userId });
    if(!cart.bookIds.map(x => x.toString()).includes(bookId.toString())){
        return false;
    }
    cart.bookIds = cart.bookIds.map(x => x.toString()).filter(x => x !== bookId.toString());
    cart.save();
    return true;
};

async function getAllBooksInCart(userId) {
    const cart = await Cart.findOne({ ownerId: userId});
    if(!cart){
        await Cart.create({ownerId: userId});
        return [];
    } else{
        const books = [];
        for (const bookId of cart.bookIds) {
            const book = await itemService.getById(bookId);
            books.push(book);
        }
        return books;
    }
};

async function checkBookInCart(userId, bookId){
    const cart = await Cart.findOne({ ownerId: userId }).lean();
    if(cart.bookIds.map(x => x.toString()).includes(bookId.toString())){
        return true;
    } else {
        return false;
    }
};

module.exports = {
  addToCart,
  removeFromCart,
  getAllBooksInCart,
  checkBookInCart,
  toggleCart
};

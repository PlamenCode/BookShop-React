const Item = require("../models/Item")

async function getAll(){
    const item = await Item.find({}).lean();
    return item
};

async function getById(id){
    return Item.findById(id);
};

async function getThreeBooks(){
    let books = await Item.find({}).limit(3).lean();
    for (const book of books) {
       book.description = book.description.split('').slice(0, 100).join('');
       book.description += ' ...';
    }
    return books;
}

async function createItem(book){
    return Item.create(book);
};

async function updateItem(itemId, itemData){
    const existing = await Item.findById(itemId);

    existing.name = itemData.name;
    existing.author = itemData.author;
    existing.img = itemData.img;
    existing.price = Number(itemData.price);
    existing.description = itemData.description;
    
    return existing.save();
};

async function deleteById(id){
    
    return Item.findByIdAndDelete(id);
};


module.exports = {
    getAll,
    getById,
    createItem,
    updateItem,
    deleteById,
    getThreeBooks
}
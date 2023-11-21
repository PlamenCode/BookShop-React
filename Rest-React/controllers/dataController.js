const { hasUser } = require('../middlewares/guards');
const { getAll, createItem, getById, deleteById, updateItem, getThreeBooks } = require('../services/itemService');
const parseError = require('../utils/parser');

const dataController = require('express').Router();

dataController.get('/', async(req, res) =>{
    const items = await getAll();
    res.json(items);
});

dataController.post('/', hasUser(),  async (req, res) => {
    try {
        const book = {
            name: req.body.book.name,
            author: req.body.book.author,
            img: req.body.book.img,
            price: Number(req.body.book.price),
            description: req.body.book.description,
            ownerId: req.body.user
        };
        if(book.name == '' || book.author == '' || book.img == '' || book.price < 1 || book.description == '' || book.ownerId == ''){
            throw new Error('Invalid information was send')
        };
        const item = await createItem(book);
        res.json(item);  
    } catch (err) {
        const message = parseError(err)
        res.status(400).json({ message });
    };
});

dataController.get('/recent', async (req, res) =>{
    try { 
        const items = await getThreeBooks();
        res.json(items)
    } catch (error) {
        const message = `no books yet`
        res.status(400).json({ message });
    }
})

dataController.get('/:id', async (req, res) => {
    try { 
        const item = await getById(req.params.id);
        res.json(item)
    } catch (error) {
        const message = `Item with ID: ${error.value} was not found.`
        res.status(400).json({ message });
    }
});


dataController.put('/:id', hasUser(),  async (req, res) => {
    const item = await getById(req.params.id);
    if(req.body.user.toString() != item.ownerId.toString()){
        return res.status(403).json({ message: 'You can\'t modify someone\'s records.'})
    };
    try {
        const result = await updateItem(req.params.id, req.body.book);
        res.json(result);
    } catch (err) {
        const message = parseError(err)
        res.status(400).json({ message });
    }
});

dataController.delete('/:id', hasUser(), async (req, res) => {
    const item = await getById(req.params.id);
    if(req.body.user.toString() != item.ownerId.toString()){
        return res.status(403).json({ message: 'You can\'t delete someone\'s records.'})
    };
    try {
        await deleteById(req.params.id);
        res.status(200).json({message: 'Item Deleted'});
    } catch (err) {
        const message = parseError(err)
        res.status(400).json({ message });
    }
});


module.exports = dataController;
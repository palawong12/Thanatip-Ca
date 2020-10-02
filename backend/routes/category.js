const express = require('express');
const router = express.Router();
const Category = require('../models/category.js');
router.get('/category', (req, res) => {
    Category.find({}, (err, data) => {
        res.json(data);
    })
})
router.get('/category/:id', (req, res) => {
    Category.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})
router.delete('/category/:id', async (req, res) => {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ 'message': 'Deleted' });
})
router.post('/category', (req, res) => {
    category = new Category({
        name: req.body.name,
        slug: req.body.slug
    })
    category.save(() => {
        res.json(category);
    })
});
router.put('/category/:id', async (req, res) => {
    await Category.findByIdAndUpdate(req.params.id, req.body);
    res.json({ 'message': 'Updated' });
});
module.exports = router;
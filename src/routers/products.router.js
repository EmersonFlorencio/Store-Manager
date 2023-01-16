const express = require('express');
const productsController = require('../controllers/products.controller');
const { validadeName } = require('../middlewares/validadeName');

const router = express.Router();

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductById);
router.post('/', validadeName, productsController.InsertProduct);

module.exports = router;

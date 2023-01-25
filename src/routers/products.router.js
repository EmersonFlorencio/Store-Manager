const express = require('express');
const productsController = require('../controllers/products.controller');
const { validadeName, validateProducts } = require('../middlewares/validadeProduct');

const router = express.Router();

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductById);
router.post('/', validadeName, productsController.InsertProduct);
router.put('/:id', validateProducts, productsController.updateProduct);

module.exports = router;

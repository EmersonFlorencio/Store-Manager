const express = require('express');
const salesController = require('../controllers/sales.controller');
const { validateSale,
       validateProduct, 
      validateIfHaveSales,
} = require('../middlewares/validateSales');

const router = express.Router();

router.post('/', validateSale, validateProduct, salesController.registerSale);
router.get('/', salesController.listOfSales);
router.get('/:id', validateIfHaveSales, salesController.salesById);

module.exports = router;

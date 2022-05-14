const express = require('express');

// Controller
const { createTransfer } = require('../controllers/transfers.controller');

const router = express.Router();

router.post('/', createTransfer);

module.exports = { transfersRouter: router };

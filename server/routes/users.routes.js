const express = require('express');

// Controller
const {
  signupUser,
  loginUser,
  getHistoryById,
  getUsers,
} = require('../controllers/users.controller');

const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);
router.get('/:id/history', getHistoryById);
router.get('/', getUsers);

module.exports = { usersRouter: router };

// Models
const { User } = require('../model/user.model');
const { Transfer } = require('../model/transfer.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const signupUser = catchAsync(async (req, res, next) => {
  const { name, password } = req.body;
  let accountNumber = Math.floor(Math.random() * 900001 + 100000);
  const newUser = await User.create({ name, accountNumber, password });
  res.status(200).json({ newUser });
});

const loginUser = catchAsync(async (req, res, next) => {
  const { accountNumber, password } = req.body;
  const user = await User.findOne({ where: { accountNumber, password } });
  if (!user) {
    return next(new AppError('wrong credentials', 404));
  }
  user.password = undefined;
  res.status(200).json({ user });
});

const getHistoryById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const userTransfers = await Transfer.findAll({
    where: { senderUserId: id },
    // include: [{ model: User }],
    // include: [{ model: User, where: { id: id } }],
  });
  res.status(200).json({ userTransfers });
});

const getUsers = catchAsync(async (req, res, next) => {
  const users = await User.findAll();
  res.status(200).json({ users });
});

module.exports = { signupUser, loginUser, getHistoryById, getUsers };

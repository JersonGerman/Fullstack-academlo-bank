const { Transfer } = require('../model/transfer.model');
const { User } = require('../model/user.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const createTransfer = catchAsync(async (req, res, next) => {
  const { amount, accountNumberReceiver, accountNumberSender } = req.body;

  const accountSender = await User.findOne({
    where: { accountNumber: accountNumberSender },
  });
  const accountReceiver = await User.findOne({
    where: {
      accountNumber: accountNumberReceiver,
    },
  });
  if (!accountReceiver) {
    return next(new AppError('This destination account does not exist', 404));
  }
  if (accountSender.amount < amount) {
    return next(new AppError('Insufficient amount for this operation', 404));
  }

  const newAmountReceiver = parseInt(accountReceiver.amount) + amount;

  await accountSender.update({ amount: accountSender.amount - amount });
  await accountReceiver.update({ amount: newAmountReceiver });
  const newTransfer = await Transfer.create({
    amount,
    senderUserId: accountSender.id,
    receiverUserId: accountReceiver.id,
  });

  res.status(200).json({ status: 'success', newTransfer });
});

module.exports = { createTransfer };

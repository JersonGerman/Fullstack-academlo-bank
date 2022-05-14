const { app } = require('./app');

// Models
const { User } = require('./model/user.model');
const { Transfer } = require('./model/transfer.model');

// Utils
const { db } = require('./utils/database');

// Authenticate database credentials
db.authenticate()
  .then(() => console.log('Database authenticated'))
  .catch(err => console.log(err));

// Establish models relations
// 1 User <----> M Transfer
// User.hasMany(Transfer,{forignKey: 'senderUserId})
User.hasMany(Transfer, { foreignKey: 'senderUserId' });
Transfer.belongsTo(User);

User.hasMany(Transfer, { foreignKey: 'receiverUserId' });
Transfer.belongsTo(User);

db.sync()
  .then(() => console.log('Database synced'))
  .catch(error => console.log(error));

const PORT = process.env.PORT_SERVER || 4200;

app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}!!!`);
});

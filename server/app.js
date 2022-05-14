const express = require('express');
const cors = require('cors');

// Controller
const { globalErrorHandler } = require('./controllers/errors.controller');

// Routes
const { usersRouter } = require('./routes/users.routes');
const { transfersRouter } = require('./routes/transfers.routes');

// Init express app
const app = express();

// Enable CORS
app.use(cors());

// Enable incomming JSON data
app.use(express.json());

// Endpoints
// http://localhost:4200/api/v1/
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/transfers', transfersRouter);

// Global error handler
app.use('*', globalErrorHandler);

module.exports = { app };

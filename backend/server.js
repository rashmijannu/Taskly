const express = require('express');
const mongoose = require('mongoose');
const tasks = require('./routes/tasks');
const app = express();
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/taskly', { useNewUrlParser: true, useUnifiedTopology: true });
app.use('/api/tasks', tasks);
app.listen(5000, () => console.log('Server running'));

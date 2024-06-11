const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./services/db');
const userRouter = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

sequelize.sync().then(() => {
    console.log('Database & tables created!');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

app.use(userRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

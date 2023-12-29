const express = require('express');
const router = express.Router();
const app = express();

// routers

const dashRouter = require('./routes/dashboard');
app.use(dashRouter);

app.set("view engine", "ejs");
app.set("views", "views");

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
});
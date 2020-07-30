const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

// MongoDB (Não-relacional)
mongoose.connect('mongodb+srv://arthur:z8P1LqPLVqCbT5Lm@projetos.wqamn.mongodb.net/react-database?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);
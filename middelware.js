const express = require('express');
const app = express();
app.get('/', (req,res) => {
    console.log("Hello");
})
app.listen('3000');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app= express();
const port=3000;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views')); 
app.use(bodyParser.urlencoded({ extended:false}));
app.use(express.static(__dirname));
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,  'index.html'));
});
    app.post('/submit', (req, res) => {
        const formData = req.body;
        console.log('Form data received:', formData);
        res.render('submitted', { data:formData });
});
app.listen(port,() =>{
    console.log(`Server listening at http://localhost:${port}`);
});
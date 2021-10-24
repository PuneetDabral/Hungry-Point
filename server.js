const express = require('express')
const app = express();
const ejs = require('ejs');
const path = require('path');
const expressLayout = require('express-ejs-layouts')


const PORT = process.env.PORT || 3000;
//assests
app.use(express.static('Public'))
app.get('/', (req, res) => {
    res.render('home')
 });



//set templete engine
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')


app.listen(PORT, ()=>{
    console.log(`lisning of port ${PORT}`);
})
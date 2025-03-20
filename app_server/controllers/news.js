var fs = require('fs');
var items = JSON.parse(fs.readFileSync('./data/news.json', 'utf-8'));

/* GET NEWS */
const news = (req, res) => {
    console.log('News route accessed');
    res.render('news', { title: "Travlr Getaways", items });

};

module.exports = {news}
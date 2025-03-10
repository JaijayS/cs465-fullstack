/* GET NEWS*/

const news = (req, res) => {
    console.log('News route accessed')
    res.render('news', {title: "Travlr Getaways"});
};

module.exports = {news}
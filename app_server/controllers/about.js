var fs = require('fs');
var sections = JSON.parse(fs.readFileSync('./data/about.json', 'utf-8'));

/* GET ABOUT VIEW */
const about = (req, res) => {
    console.log('About route accessed');
    res.render('about', {title: "Travlr Getaways", sections});
};

module.exports = {about};
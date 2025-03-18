var fs = require('fs')
var trips = JSON.parse(fs.readFileSync('./data/travel.json', 'utf-8'))
/* GET TRAVEL VIEW */

const travel = (req, res) => {
    console.log('Travel route accessed')
    res.render('travel', {title: 'Travlr Getaways', trips});
};
module.exports = {travel};
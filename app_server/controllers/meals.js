var fs = require('fs')
var items = JSON.parse(fs.readFileSync('./data/meals.json', 'utf-8'))
/* GET MEALS*/

const meals = (req, res) => {
    console.log('Meals route accessed')
    res.render('meals', {title: "Travlr Getaways", items});
};

module.exports = {meals}
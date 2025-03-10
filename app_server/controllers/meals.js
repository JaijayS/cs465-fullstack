/* GET MEALS*/

const meals = (req, res) => {
    console.log('Meals route accessed')
    res.render('meals', {title: "Travlr Getaways"});
};

module.exports = {meals}
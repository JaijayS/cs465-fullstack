/* GET HOMEPAGE*/

const index = (req, res) => {
    console.log('Travel route accessed')
    res.render('index', {title: "Travlr Getaways"});
};

module.exports = {index}
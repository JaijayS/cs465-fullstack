/* GET TRAVEL VIEW */

const travel = (req, res) => {
    console.log('Travel route accessed')
    res.render('travel', {title: 'Travlr Getaways'});
};
module.exports = {travel};
/* GET ROOMS*/

const about = (req, res) => {
    console.log('About route accessed')
    res.render('about', {title: "Travlr Getaways"});
};

module.exports = {about}
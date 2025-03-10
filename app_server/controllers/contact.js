/* GET Contact*/

const contact = (req, res) => {
    console.log('Contact route accessed')
    res.render('contact', {title: "Travlr Getaways"});
};

module.exports = {contact}
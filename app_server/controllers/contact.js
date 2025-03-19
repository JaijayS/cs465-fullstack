var fs = require('fs');
var contacts = JSON.parse(fs.readFileSync('./data/contact.json', 'utf-8'));

/* GET CONTACT VIEW */
const contact = (req, res) => {
    console.log('Contact route accessed');
    res.render('contact', { title: "Travlr Getaways", contacts });
};

module.exports = { contact };
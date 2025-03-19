var fs = require('fs')
var options = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf-8'))
/* GET ROOMS*/

const rooms = (req, res) => {
    console.log('Rooms route accessed');
    res.render('rooms', {title: "Travlr Getaways", options});
};

module.exports = {rooms}
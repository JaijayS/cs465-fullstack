/* GET ROOMS*/

const rooms = (req, res) => {
    console.log('Rooms route accessed')
    res.render('rooms', {title: "Travlr Getaways"});
};

module.exports = {rooms}
const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

//GET: /trips - all trips
const tripsList = async(req, res) => {
    const q = await Model   
        .find({})
        .exec();

        console.log(q);

    if(!q)
    {
        return res
                .status(404)
                .json(err);
    } else {
        return res 
            .status(200)
            .json(q);
    }
};

//GET: /trips/:tripCode - lists a single trip
const tripsFindByCode = async(req, res) => {
    const q = await Model   
        .find({'code' : req.params.tripCode})
        .exec();

        console.log(q);

    if(!q)
    {
        return res
                .status(404)
                .json(err);
    } else {
        return res 
            .status(200)
            .json(q);
    }
};


module.exports = {
    tripsList,
    tripsFindByCode
};
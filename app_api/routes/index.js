const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");

//trips endpoint
router
    .route("/trips")
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);

//tripsFindByCode endpoint
router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;
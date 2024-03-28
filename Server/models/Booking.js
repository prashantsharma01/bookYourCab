const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    pickup_location: {
    latitude: String,
    longitude: String,
    address: String
    },
    dropoff_location: {
    latitude: String,
    longitude: String,
    address: String
    },
    user_Id:String,
    
})

const bookingmodel = mongoose.model("bookings", bookingSchema)
module.exports = bookingmodel
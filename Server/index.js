const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const usermodel = require('./models/Users')
const bookingmodel = require('./models/Booking')
const address = require('./address.json')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/bookYourCab')

app.get('/address', (req, res) => {
    res.status(200).send(address)
})

app.get('/users', async (req, res, next) => {
    
    usermodel.find({})
        .then(users => res.json(users))
        .catch(err => console.log(err))
})

app.get('/bookings', (req, res) => {
    bookingmodel.find({})
    .then(bookings => res.json(bookings))
    .catch(err => console.log(err))
})

app.post('/book', async (req, res) => {
    const { userName, pickup_location, dropoff_location } = req.body

    try {
        const userResult = await usermodel.create({
            name: userName
        })

        const bookingResult = await bookingmodel.create({
            user_Id: userResult._id,
            pickup_location,
            dropoff_location,
        })

        res.status(201).json({
            users: userResult,
            bookings: bookingResult,
        })
    }
    catch (error) {
        res.status(500).send(error.message)
    }

})

app.listen(5000, () => {
    console.log('server is running ...');
})

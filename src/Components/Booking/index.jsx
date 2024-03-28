import React, { useEffect, useState } from 'react'
import NavBar from '../Common/NavBar'
import { BookingContainer, CarImage, DetailsContainer, Heading, Image, ImageContainer, Text, TextContainer } from './styles'
import image from '../../assets/map.png'
import successful from '../../assets/successful.png'
import carImage from '../../assets/car.png'
import Button from '../Common/Button'
import Modal from '../Common/Dialog-Modal'
import InputField from '../Common/InputField'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


function Booking({ updateProceedToBooking }) {

  const [bookingSuccessFul, setBookingSuccessFul] = useState(false)
  const [selectedId, setSelectedId] = useState()
  const [showModal, setShowModal] = useState(false)
  const [userName, setUserName] = useState('')
  const [distance, setDistance] = useState()
  const [pickupLocationLatitude, setPickupLocationLatitude] = useState()
  const [pickupLocationLongitude, setPickupLocationLongitude] = useState()
  const [dropLocationLatitude, setpDropLocationLatitude] = useState()
  const [dropLocationLongitude, setDropLocationLongitude] = useState()
  const [pickupLocation, setPickupLocation] = useState({
    address: ""
  })
  const [dropLocation, setDropLocation] = useState({
    address: ""
  })
  const [duration, setDuration] = useState()

  useEffect(() => {

    setPickupLocationLatitude(parseFloat(localStorage.getItem('pickupLatitude')))
    setPickupLocationLongitude(parseFloat(localStorage.getItem('pickupLongitude')))
    setpDropLocationLatitude(parseFloat(localStorage.getItem('dropLatitude')))
    setDropLocationLongitude(parseFloat(localStorage.getItem('dropLongitude')))
  }, [])

  useEffect(() => {
    if (pickupLocationLatitude && dropLocationLatitude) {
      axios.get(`https://router.project-osrm.org/route/v1/driving/${pickupLocationLongitude},${pickupLocationLatitude};${dropLocationLongitude},${dropLocationLatitude}?overview=false`)
        .then(res => {
          setDistance(res.data.routes[0].distance)

          const pickupAddress = { ...pickupLocation, address: res.data.waypoints[0].name }
          setPickupLocation(pickupAddress)

          const dropDddress = { ...dropLocation, address: res.data.waypoints[1].name }
          setDropLocation(dropDddress)

          setDuration(res.data.routes[0].duration)
        })
        .catch(err => console.log(err))
    }

  }, [pickupLocationLatitude, dropLocationLatitude])

  const setSelctedValue = (id,) => {
    setSelectedId(id)
    console.log('id is :: ' + id);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  const handleBooking = async () => {
    const bookingData = {
      userName,
      pickup_location: {
        latitude: pickupLocationLatitude,
        longitude: pickupLocationLongitude,
        address: pickupLocation.address
      },
      dropoff_location: {
        latitude: dropLocationLatitude,
        longitude: dropLocationLongitude,
        address: dropLocation.address
      }
    }

    try {
      const response = await axios.post('http://localhost:5000/book', bookingData)
      console.log('booking Successful', response.data);
      setBookingSuccessFul(true)
    } catch (error) {
      console.error('booking Failed ', error)
    }
  }

  const handleSuccessful = () => {
    updateProceedToBooking(false)
    setBookingSuccessFul(false)
    localStorage.clear();
  }

  return (
    <React.Fragment>
      <NavBar />
      <BookingContainer>
        <ImageContainer>
          <Image src={image} />
          <CarImage key={13} src={carImage} onClick={() => setSelctedValue(13)} style={{ top: '178px', left: '278px' }} rotate='32' />
          <CarImage key={26} src={carImage} onClick={() => setSelctedValue(26)} style={{ top: '175px', left: '405px' }} rotate='-26' />
          <CarImage key={39} src={carImage} onClick={() => setSelctedValue(39)} style={{ top: '80px', left: '326px' }} rotate='141' />
          <CarImage key={44} src={carImage} onClick={() => setSelctedValue(44)} style={{ top: '78px', left: '495px' }} rotate='239' />
          <CarImage key={58} src={carImage} onClick={() => setSelctedValue(58)} style={{ top: '106px', left: '397px' }} rotate='125' />
        </ImageContainer>
        <DetailsContainer>
          <Heading>
            {selectedId ? <h3>Your Ride Details</h3> : <h3>Select the ride you want to book</h3>}
          </Heading>
          <hr />
          {
            selectedId ? <>
              <TextContainer>
                <Text>Pick Up Location:</Text>
                <Text>{pickupLocation.address}</Text>
              </TextContainer>
              <TextContainer>
                <Text>Drop Location:</Text>
                <Text>{dropLocation.address}</Text>
              </TextContainer>
              <TextContainer>
                <Text>Total Distance</Text>
                <Text>{distance} Km</Text>
              </TextContainer>
              <TextContainer>
                <Text>Total Duration</Text>
                <Text>{duration} minutes</Text>
              </TextContainer>
              <TextContainer>
                <Text>Total Fare</Text>
                <Text>₹ {100 + selectedId}</Text>
              </TextContainer>
              <br />
              <TextContainer>
                <Button onClick={() => setShowModal(true)}>Continue</Button>
                <Link to={'/'}>
                  <Button color='danger'>Back</Button>
                </Link>
              </TextContainer>
            </> : ''
          }
        </DetailsContainer>
      </BookingContainer>
      <Modal
        Headingtext={bookingSuccessFul ? 'Booking SuccessFull' : 'Verify your booking details'}
        show={showModal}
        handleClose={closeModal}
        buttonName={bookingSuccessFul ? 'Close' : 'Book'}
        handleSubmit={bookingSuccessFul ? handleSuccessful : handleBooking}
      >
        {bookingSuccessFul ? <>
          <Image src={successful} successful />
        </> :
          <>
            <InputField
              inputValue={userName}
              onChange={(value) => setUserName(value)}
              label='Enter Your name before moving forward'
              placeholder="ex: Prashant Sharma"
            />
            <br />
            <TextContainer>
              <Text>Pick Up Location:</Text>
              <Text>{pickupLocation.address}</Text>
            </TextContainer>
            <TextContainer>
              <Text>Drop Location:</Text>
              <Text>{dropLocation.address}</Text>
            </TextContainer>
            <TextContainer>
              <Text>Total Distance</Text>
              <Text>{distance} Km</Text>
            </TextContainer>
            <TextContainer>
              <Text>Total Duration</Text>
              <Text>{duration} minutes</Text>
            </TextContainer>
            <TextContainer>
              <Text>Total Fare</Text>
              <Text>₹ {100 + selectedId}</Text>
            </TextContainer>
          </>}
      </Modal>
    </React.Fragment>

  )
}

export default Booking
import React, { useEffect, useState } from 'react'
import NavBar from '../Common/NavBar/'
import { BookingContainer, UserDetailsContainer, Dropdown, DropdownWrapper, InfoContainer, LandingText, Option, BookingDetailsContainer } from './styles'
import Button from '../Common/Button'
import axios from 'axios'
import Booking from '../Booking'

function Landingpage() {
  const [proceedToBooking, setProceedToBooking] = useState(false)
  const [bookings, setBookings] = useState(true)
  const [users, setUsers] = useState({})
  const [bookingDetails, setBookingDetails] = useState({})
  const [addresses, setAddresses] = useState([])
  const [pickupPoint, setPickupPoint] = useState()
  const [dropPoint, setDropPoint] = useState()

  const updateProceedToBooking = (newValue) => {
    setProceedToBooking(newValue)
    setBookings(true)
  }

  useEffect(() => {
    axios.get('http://localhost:5000/address')
      .then(res => {
        setAddresses(res.data.addresses)
      })
  }, [])

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(res => {
        const sortedData = res.data.sort((a, b) => {
          return b._id.localeCompare(a._id);
        })
        setUsers(sortedData)
      })
      .catch(err => console.log(err))

    axios.get(`http://localhost:5000/bookings`)
      .then(res => setBookingDetails(res.data))
      .catch(err => console.log(err))
  }, [proceedToBooking])


  const handlePickupLatAndLong = (address) => {
    const matchingLocation = addresses.find((location) => location.address === address)
    localStorage.setItem('pickupLatitude', matchingLocation.latitude)
    localStorage.setItem('pickupLongitude', matchingLocation.longitude)
  }

  const handleDropLatAndLong = (address) => {
    const matchingLocation = addresses.find((location) => location.address === address)
    localStorage.setItem('dropLatitude', matchingLocation.latitude)
    localStorage.setItem('dropLongitude', matchingLocation.longitude)
  }

  const handleSubmit = () => {
    if (pickupPoint.length && dropPoint.length) {
      setProceedToBooking(true)
    }
  }

  return (
    <React.Fragment>
      {proceedToBooking ? <Booking updateProceedToBooking={updateProceedToBooking} /> : <>
        <NavBar />
        <InfoContainer height={users.length}>
          {users && users.length > 0 && bookings ? <>
            <LandingText>
              {'Your Bookings'}
            </LandingText>
            <Button onClick={() => {
              setPickupPoint('')
              setDropPoint('')
              setBookings(false)
            }
            }>{'Add new Booking'}</Button>
            <BookingContainer>
              {users.map((user) => (
                <UserDetailsContainer key={user._id}>
                  <p>{user.name}</p>
                  {
                    bookingDetails.filter((booking) => booking.user_Id === user._id)
                      .map((booking) => (
                        <BookingDetailsContainer key={booking._id}>
                          <p>Pickup Location: <strong>{booking.pickup_location.address}</strong></p>
                          <p>Drop Location: <strong>{booking.dropoff_location.address}</strong></p>
                        </BookingDetailsContainer>
                      ))
                  }
                </UserDetailsContainer>
              ))}
            </BookingContainer>
          </> : <>
            <LandingText>
              {'Please Enter Details to Book your Cab'}
            </LandingText>
            <DropdownWrapper>
              <Dropdown value={pickupPoint}
                onChange={(e) => {
                  setPickupPoint(e.target.value)
                  handlePickupLatAndLong(e.target.value)
                }}>
                <Option value="">Select Pickup Address</Option>
                {addresses.map((addr, index) => (
                  <Option key={index} value={addr.address}>{addr.address}</Option>
                ))}
              </Dropdown>

              <Dropdown value={dropPoint}
                onChange={(e) => {
                  setDropPoint(e.target.value)
                  handleDropLatAndLong(e.target.value)
                }}>
                <Option value="">Select Drop Address</Option>
                {addresses.map((addr, index) => (
                  <Option key={index} value={addr.address}>{addr.address}</Option>
                ))}
              </Dropdown>
            </DropdownWrapper>
            <br />
            <Button onClick={() => handleSubmit()}>{'Continue'}</Button>
          </>}
        </InfoContainer>
      </>}
    </React.Fragment>
  )
}

export default Landingpage



// {
//   return (
//     <div>
//       {userBookings.map((user) => (
//         <div key={user._id}>
//           <h2>{user.name}</h2>
//           <ul>
//             {user.bookings.map((booking) => (
//               <li key={booking._id}>
//                 Booking ID: {booking._id}
//                 <br />
//                 Address: {booking.address}
//                 <br />
//                 Amount: ${booking.amount}
//                 {/* Other booking details... */}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// }
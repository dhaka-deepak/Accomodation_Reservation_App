import { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import  AddRoom  from "./components/room/AddRoom"
import ExistingRooms from './components/room/ExistingRooms'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/home/Home'
import EditRoom from './components/room/EditRoom'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import RoomListing from './components/room/RoomListing'
import Admin from './components/admin/Admin'
import Checkout from './components/bookings/Checkout'
import BookingSuccess from './components/bookings/BookingSuccess'
import Bookings from './components/bookings/Bookings'
import FindBooking from './components/bookings/FindBooking'
import Login from './components/auth/Login'
import Registration from './components/auth/Registration'
import Profile from './components/auth/Profile'
import Logout from './components/auth/Logout'
import { AuthProvider } from './components/auth/AuthProvider'
import RequireAuth from './components/auth/RequireAuth'


function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
    <main>
      <Router>
        <NavBar/>
        <Routes>
           <Route path="/" element={<Home/>}></Route>
           <Route path="/edit-room/:roomId" element={<EditRoom/>}></Route>
           <Route path="/existing-rooms" element={<ExistingRooms/>}></Route>
           <Route path="/add-room" element={<AddRoom/>}></Route>
           <Route path="/browse-all-rooms" element={<RoomListing/>}></Route>
           <Route path="/admin" element={<Admin/>}></Route>
           <Route path="/book-room/:roomId" element={
                <RequireAuth>
									<Checkout />
								</RequireAuth>}>
            </Route>
           <Route path="/booking-success" element={<BookingSuccess/>}></Route>
           <Route path="/existing-bookings" element={<Bookings/>}></Route>
           <Route path="/find-booking" element={<FindBooking/>}></Route>
           <Route path="/login" element={<Login/>}></Route>
           <Route path="/register" element={<Registration/>}></Route>
           <Route path="/profile" element={<Profile/>}></Route>
           <Route path="/logout" element={<Logout/>}></Route>
        </Routes>
      </Router>
      <Footer/>
    </main>
    </AuthProvider>
  )
}

export default App

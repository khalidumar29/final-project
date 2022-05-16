import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";
import SignUp from "./Pages/SignUp/SignUp";
import { Toaster } from "react-hot-toast";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointment from "./Pages/Dashboard/MyAppointment/MyAppointment";
import MyReview from "./Pages/Dashboard/MyReview/MyReview";
import History from "./Pages/Dashboard/History/History";
import AllUsers from "./Pages/Dashboard/AllUsers/AllUsers";
function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route
          path='/appointment'
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        ></Route>
        <Route
          path='/dashboard'
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment />}></Route>
          <Route path='myreview' element={<MyReview />}></Route>
          <Route path='history' element={<History />}></Route>
          <Route path='alluser' element={<AllUsers />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;

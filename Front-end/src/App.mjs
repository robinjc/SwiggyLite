import './App.css';
import React from 'react';
// Import Screens

//Login Screens
import RestaurantLogin from './Screens/LoginScreens/RestaurantLogin.js';
import UserLogin from './Screens/LoginScreens/UserLogin.js';
import AdminLogin from './Screens/LoginScreens/AdminLogin.js';

//Register Screens
import UserRegister from './Screens/RegisterScreens/UserRegister.js';
import RestaurantRegister from './Screens/RegisterScreens/RestaurantRegister.js';
import AdminRegister from './Screens/RegisterScreens/AdminRegister.js';

//Home Screens
import Home from './Screens/HomeScreens/Home.js';
import UserRestaurantHome from './Screens/HomeScreens/UserRestaurantHome.js';
import RestaurantHome from './Screens/HomeScreens/RestaurantHome.js';
import AdminHome from './Screens/HomeScreens/AdminHome.js';
import UserHome from './Screens/HomeScreens/UserHome.js';

//Import React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu.js';

//Import Landing Page
import LandingPage from './Screens/LandingPage/LandingPage.js';
import Reciept from './Screens/Final/Reciept.js';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage></LandingPage>}></Route>
          <Route path='/Role' element={<Home></Home>}></Route>
          <Route path='/User' element={<UserLogin></UserLogin>}></Route>
          <Route path='/UserRegister' element={<UserRegister></UserRegister>}></Route>
          <Route path='/RestaurantRegister' element={<RestaurantRegister></RestaurantRegister>}></Route>
          <Route path='/AdminRegister' element={<AdminRegister></AdminRegister>}></Route>
          <Route path='/Restaurant' element={<RestaurantLogin></RestaurantLogin>}></Route>
          <Route path='/UserHome' element={<UserHome></UserHome>}></Route>
          <Route path='/UserRestaurantHome' element={<UserRestaurantHome></UserRestaurantHome>}></Route>
          <Route path='/Reciept' element={<Reciept></Reciept>}></Route>
          <Route path='/RestaurantHome' element={<RestaurantHome></RestaurantHome>}></Route>
          <Route path='/AdminHome' element={<AdminHome></AdminHome>}></Route>
          <Route path='/Admin' element={<AdminLogin></AdminLogin>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
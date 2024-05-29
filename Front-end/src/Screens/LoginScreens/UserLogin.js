import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Lottie from "lottie-react";
import UserAnimation from "../../Lottie/User.json";


import axios from "axios";


function UserLogin() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //Navigate
  const navigate = useNavigate();

  //Axios Configuration
  const loginConfiguration = {
    method: "post",
    url: "http://localhost:9000/users/login",
    data: {
      username,
      password,
    },
  };




  //HandleSignIn
  const handleSubmit = (e) => {
    e.preventDefault();
    if(username == '' | password == '') {
      alert("Fill the empty values!")
      return
    }
    axios(loginConfiguration)
    .then((result) => {
      if (result.data.role == 'user') {
        navigate('/UserHome',{state:result.data});
      }
      else {
        alert("You don't have permission to access this part of the site!");
      }
      
      
  })
    .catch((error) => {alert("Invalid Credentials!");})
  }

  
  return (
<div class="relative flex min-h-screen">
  <div class="flex min-w-0 flex-auto flex-col items-center bg-white sm:flex-row sm:justify-center md:items-start md:justify-start">
    <div class="relative hidden h-full flex-auto items-center justify-center overflow-hidden bg-purple-900 bg-cover bg-no-repeat p-10 text-white sm:w-1/2 md:flex xl:w-3/5">
      <div class="bg-mypurple absolute inset-0 z-0"></div>
      <div class="z-10 w-full max-w-md">
        <Lottie class="w-[500px] h-[500px]" animationData={UserAnimation} loop={true} />
        <div class="mb-6 font-bold leading-tight sm:text-4xl xl:text-5xl">Customer.</div>
        <div class="xl:text-md font-normal text-gray-200 sm:text-sm">Hungry but tired of waiting in line? Get your food ordered with Hungrezi - the ultimate food ordering solution!</div>
      </div>
    </div>
    <div class="w-full bg-white p-8 sm:w-auto sm:rounded-lg md:flex md:h-full md:items-center md:justify-center md:rounded-none md:p-10 lg:p-14 xl:w-2/5">
      <div class="w-full max-w-md space-y-8">
        <div class="text-center">
          <h2 class="mt-6 text-3xl font-bold text-gray-900">Welcome Back!</h2>
          <p class="mt-2 text-sm text-gray-500">Please sign in to your account</p>
        </div>
        <form class="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div class="relative">
            <label class="ml-3 text-sm font-bold tracking-wide text-gray-700">Username</label>
            <input class="w-full rounded-lg border border-gray-300 px-4 py-2 text-base focus:border-indigo-500 focus:outline-none" type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value) }/>
          </div>
          <div class="mt-8 content-center">
            <label class="ml-3 text-sm font-bold tracking-wide text-gray-700"> Password </label>
            <input class="w-full content-center rounded-lg border border-gray-300 px-4 py-2 text-base focus:border-indigo-500 focus:outline-none" type="password" placeholder="Enter Password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
          </div>
          
          <div>
          
            <button type="submit" class="bg-mypurple flex w-full cursor-pointer justify-center rounded-lg bg-gradient-to-r p-4 font-semibold tracking-wide text-gray-100 shadow-lg transition duration-500 ease-in hover:bg-black hover:bg-gradient-to-l">Sign in</button>
          
          </div>
          <p class="text-md mt-10 flex flex-col items-center justify-center text-center text-gray-500">
            <span>Don't have an account?</span>

            <Link to="/UserRegister">
            <button class="text-mypurple cursor-pointer no-underline transition duration-300 ease-in hover:text-black hover:underline">Sign up</button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
</div>


  )
}

export default UserLogin
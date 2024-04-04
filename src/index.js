import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import { CiSearch } from "react-icons/ci";
import { FaClock, FaClosedCaptioning, FaHome } from "react-icons/fa"
import { IoIosNotifications } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>App</h1>
    

<div className="flex justify-start bg-black gap-4   items-center">
  <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">1</div>
  <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">3</div>
  <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">2</div>
</div>

<div className="flex justify-center bg-black gap-4  items-center">
  <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">1</div>
  <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">3</div>
  <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">2</div>
</div>

<div className="flex justify-end bg-black gap-4  items-center">
  <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">1</div>
  <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">3</div>
  <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">2</div>
</div>
<div className="flex justify-between py-10 bg-black gap-4  items-center">
  <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">1</div>
  <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">3</div>
  <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">2</div>
</div>
<div className="flex justify-evenly bg-black gap-4  items-center">
  <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">1</div>
  <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">3</div>
  <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">2</div>
</div>
<div className="flex justify-around bg-black gap-4  items-center">
  <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">1</div>
  <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">3</div>
  <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">2</div>
</div>




<div className="w-[100%]  gap-0 flex h-auto pb-10  bg-green-400">
   <div className="h-auto flex-[28%] shadow-xl rounded-md mx-4 bg-white mt-3">
      <div className="flex justify-between mx-5 items-center mt-2">
        <img src="https://static.xx.fbcdn.net/rsrc.php/yb/r/hLRJ1GG_y0J.ico" alt="" />
        <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" className='w-[200px]' alt="" />   
      </div>
      <div className=" flex justify-between border mx-5 py-3 px-3 items-center rounded-lg shadow mt-3">
        <input type="text" placeholder='Search...' />
        <CiSearch />
      </div>

      <div className="">
         <div className="flex transition-all duration-700 hover:text-blue-800 justify-between mx-5  px-3 py-4">
            <FaHome size={25} />
            <span className='text-[20px] font-medium'>Home</span>
         </div>
         <div className="flex transition-all duration-700 hover:text-blue-800 justify-between mx-5  px-3 py-4">
            <FaHome size={25} />
            <span className='text-[20px] font-medium'>Home</span>
         </div>
         <div className="flex transition-all duration-700 hover:text-blue-800 justify-between mx-5  px-3 py-4">
            <FaHome size={25} />
            <span className='text-[20px] font-medium'>Home</span>
         </div>
         <div className="flex transition-all duration-700 hover:text-blue-800 justify-between mx-5  px-3 py-4">
            <FaHome size={25} />
            <span className='text-[20px] font-medium'>Home</span>
         </div>
         <div className="flex transition-all duration-700 hover:text-blue-800 justify-between mx-5  px-3 py-4">
            <FaHome size={25} />
            <span className='text-[20px] font-medium'>Home</span>
         </div>
         <div className="flex transition-all duration-700 hover:text-blue-800 justify-between mx-5  px-3 py-4">
            <FaHome size={25} />
            <span className='text-[20px] font-medium'>Home</span>
         </div>
      </div>

      <div className="flex justify-between px-5 items-center">
        <IoIosNotifications size={28}/>
         <span className='text-[20px]'>Notification</span>
         <IoMdClose className=' text-white bg-blue-600 rounded-full w-7 h-7 p-1' />
      </div>


      <div className="mb-6 bg-blue-600 justify-between mx-5 rounded-md px-3 py-7 text-white mt-5 flex">
         <div className="">
          Lorem ipsum dolor
         </div>
         <p>2</p>
      </div>


      {/* 
      
      https://www.uplabs.com/posts/facebook-redesign-ui-challenge
      
      */}

   </div>
   <div className="h-52 flex-[20%] rounded-md mx-4 bg-white mt-3"></div>
   <div className="h-52 flex-[30%]  rounded-md mx-4 bg-white mt-3"></div>
</div>


  </React.StrictMode>
);

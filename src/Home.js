import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import bg from "../src/assets/bg1.jpg";
import logo from "../src/assets/logo.png";
import github from "../src/assets/github.png";

const Home = () => {
  const [RoomCode, setRoomCode] = useState("");
  const navigate = useNavigate();
  const SubmitCode = (e) => {
    e.preventDefault();
    navigate(`/room/${RoomCode}`);
  }
  
  return (
    <div>
      <div className="h-[4rem] bg-black flex items-center justify-between border-b">
        <div className="flex">
          <img src={logo} className="h-14 w-14" />
          <div className="text-white flex items-center ml-4 text-bold">Video Call App</div>
        </div>
        <div  className="flex items-center cursor-pointer" >
          <a href="https://github.com/tomek28611/VideoCall" className="text-white mr-4 space-x-5">Github Repo</a>
          <img src={github} alt="GitHub" className='h-14 w-14 mr-4' />
        </div>
      </div>
      <div className="max-h-[20rem] flex justify-center">
        <img src={bg} className="object-cover w-full h-full" />
        <div className="absolute text-white text-[2rem] mt-10 ml-10 text-bold">Now you can choose Room Code</div>
        <div className="absolute text-white font-semibold mt-20 text-xl">the person you want to talk to must enter the same Room Code</div>

      </div>
      <form action="" onSubmit={SubmitCode}
        className="flex flex-col items-center justify-center">

        <label htmlFor="" className='font-bold text-[40px] pt-2 text-gray-200' >Enter The Room Code</label>

        <input type="text" required placeholder="Enter the Room Code" value={RoomCode}
          onChange={(e) => setRoomCode(e.target.value)} className="bg-blue-400 placeholder:text-white
        py-2 w-[16rem] rounded-full pl-9 mt-9" />

        <button className='bg-orange-400 rounded-full mt-4 py-2 px-4 font-bold' type="submit">Enter Room</button>
      </form>
      <div className="border-t border-white">
        <div className="text-white text-center text-bold text-[2rem] mt-10">| Viedo Calls App</div>
        <div className="mt-[8px] font-normal text-[20px] text-center text-secondary-white">
          <span className="font-extrabold text-white">Video Call App</span>
          <div className="text-white mt-5">used ZegoCloud | JavaScript | React.js </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [RoomCode, setRoomCode] = useState("");
    const navigate = useNavigate();
    const SubmitCode = (e) => {
        e.preventDefault();
        navigate(`/room/${RoomCode}`);
    }
  return (
    <div>
        <form action="" onSubmit={SubmitCode}
        className="flex flex-col items-center justify-center">

        <label htmlFor="" className='font-bold text-[20px] pt-12' >Enter The Room Code</label>

        <input type="text" required placeholder="Enter the Room Code" value={RoomCode}
        onChange={(e) => setRoomCode(e.target.value)} className="bg-blue-400 placeholder:text-white
        py-2 w-[16rem] rounded-full pl-9 mt-9" />

        <button className='bg-orange-400 rounded-full mt-4 py-2 px-4 font-bold' type="submit">Enter Room</button>
        </form>
    </div>
  )
}

export default Home;
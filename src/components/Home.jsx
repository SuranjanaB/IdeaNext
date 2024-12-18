
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/NotesSlice';
import { FaBookmark } from "react-icons/fa";

const Home = () => {
    const[title,setTitle]=useState("");
    const[value,setValue]=useState('');
    const[searchParams,setSearchParams]=useSearchParams();
    const noteId=searchParams.get("noteId");
    const dispatch=useDispatch();
    const allPastes=useSelector((state)=>state.notes.pastes);

    useEffect(() => {
      if(noteId){
        const paste=allPastes.find((p)=>p._id===noteId);
        setTitle(paste.title);
        setValue(paste.content);
      }
      
    }, [noteId])

    function createNote(){
        const paste={
            title:title,
            content: value,
            _id: noteId || Date.now().toString(36),
            createdAt:new Date().toISOString(),
        }
        
        

        if(noteId){
            //update
            dispatch(updateToPastes(paste));
        }else{
            //create
            dispatch(addToPastes(paste));
        }

        //after creation or updation
        setTitle('');
        setValue('');
        setSearchParams({});
    }

  return (
    <div>
        <div className='flex flex-row gap-7 place-content-between'>
      <input
        className='p-2 rounded-2xl mt-10 w-[80%] pl-8 border'
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e)=>setTitle(e.target.value)}>
        
      </input>

      <button onClick={createNote} className='p-1 mt-10 bg-blue-500 rounded-xl text-white font-bold mr-3 h-10 w-[17%]'>
        {
            noteId? "Update My Note":"Create My Note"
        }
      </button>
    </div>
    <div className='mt-2'>
      <div className='w-[90%] rounded-t-lg border p-2 ml-4 mr-4 flex flex-row place-content-between mt-5'>
      <div>
        <ul className='flex flex-row gap-3'>
          <li className='bg-red-400 rounded-full h-3 w-3'></li>
          <li className='bg-yellow-400 rounded-full h-3 w-3'></li>
          <li className='bg-green-400 rounded-full h-3 w-3'></li>
        </ul>
      </div>
      <FaBookmark  className='cursor-pointer' />
      </div>
        <textarea
            className='p-5 rounded-b-lg border mt-0 m-4 w-[90%] h-80'
            value={value}
            placeholder='Write your comments here....'
            onChange={(e)=>setValue(e.target.value)}
            rows={20}
        />
    </div>
    </div>
  );
};

export default Home

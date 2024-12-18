import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/NotesSlice';
import toast,{Toaster} from 'react-hot-toast';
import { IoCopyOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { FormatDate } from "../utlis/formatDate";
import { CiCalendar } from "react-icons/ci";


const Notes = () => {
    const pastes=useSelector((state)=>state.notes.pastes);
    const[searchItem,setSearchItem]=useState('');
    const dispatch=useDispatch();

    const filterData=pastes.filter((paste)=>paste.title.toLowerCase().includes(searchItem.toLowerCase()));
  function handleDelete(pasteId){
      dispatch(removeFromPastes(pasteId));
  }

    return (
    <div className='text-black'>
      <input
        className='text-black p-2 rounded-sm border m-7 min-w-[90%] mt-5'
        typr='search'
        placeholder='Search here'
        value={searchItem}
        onChange={(e)=>setSearchItem(e.target.value)}
      />
      
      <div className='flex flex-col mt-2 m-7 border gap-5  w-[90%]'>
      {
        filterData.length>0 &&
        filterData.map(
          (paste)=>{
            return(
              <div>
              <p className='text-3xl p-3 font-bold'>All Notes</p>
              <div className='border p-4 m-4 flex flex-row' key={paste?._id}>
                <div className='w-[75%] mr-6'>
                  <div className='font-bold text-2xl'>{paste.title}</div>
                  <div className='text-xs p-2'>{paste.content}</div>
                </div>
                <div className='flex flex-col place-content-between'>
                  <div className='flex flex-row gap-4'>
                <button className='border-2 p-1'>
                    <a href={`/?noteId=${paste?._id}`}>
                    <CiEdit />
                    </a>
                  </button>
                  <button className='border-2 p-1'>
                    <a href={`/notes/${paste?._id}`}>
                    <FaEye />
                    </a>
                  </button>
                  <button  className='border-2 p-1' onClick={()=>handleDelete(paste?._id)}>
                  <MdDeleteOutline />
                  </button>
                  <button className='border-2 p-1' onClick={()=>{
                    navigator.clipboard.writeText(paste?.content)
                    toast.success("Copied to clipboard")
                  }}>
                    <IoCopyOutline />
                  </button>
                  <button className='border-2 p-1' onClick={()=>{
                    navigator.clipboard.writeText(paste?.path)
                    toast.success("Ready to be Shared")
                  }}>
                    <CiShare2 />
                  </button>
                  </div>
                  <div className='flex flex-row gap-2 text-sm'>
                  <CiCalendar className='text-lg'/>
                  {FormatDate(paste?.createdAt)}
                </div>
                </div>
              </div>
              </div>
            )
          }
        )
      }
      </div>
    </div>
  )
}

export default Notes

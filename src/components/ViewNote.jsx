
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';


const ViewNote = () => {

  const {id}=useParams();
  const allPastes=useSelector((state)=>state.notes.pastes);
  const paste=allPastes.filter((p)=>p._id===id)[0];
  console.log(paste);

  return (
    <div>
        <div className='flex flex-row gap-7 place-content-between'>
      <input
        className='p-2 rounded-2xl mt-3 w-[66%] pl-4'
        type='text'
        placeholder='Enter title here'
        value={paste.title}
        disabled
        onChange={(e)=>setTitle(e.target.value)}>
        
      </input>

    </div>
    <div className='mt-5'>
        <textarea
            className='p-5 rounded-2xl mt-4 min-w-[500px]'
            value={paste.content}
            placeholder='Enter Content here'
            disabled
            onChange={(e)=>setValue(e.target.value)}
            rows={20}
        />
    </div>
    </div>
  )
}

export default ViewNote

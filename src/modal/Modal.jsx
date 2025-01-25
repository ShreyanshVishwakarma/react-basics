import {useState} from 'react';
import Popup from './Popup';

export default function Modal(){
    const [showModal, setShowModal] = useState(false);
    const handleClick = () => {
        setShowModal(!showModal);
    }   
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <button onClick={handleClick} className = "bg-black text-white p-3 rounded-2xl hover:bg-gray-600">click me for free pizza</button>
            {showModal && <Popup  onClose={()=>setShowModal(!showModal)}/>}
        </div>
    )
}
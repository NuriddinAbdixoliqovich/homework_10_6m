import React from 'react'
import "./modal.css"

const Modal = ( { open, onClose }) => {
    if (!open) return null;
  return (
    <div className='modal'>
        <h2 className="text-center text-xl">Modal title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo neque ratione corrupti deserunt rem eos aut voluptas, similique commodi numquam perferendis reprehenderit voluptatum a ipsum.</p>
        <button onClick={() => onClose()}>OK</button>
        <button onClick={() => onClose()}>Cancel</button>
    </div>
  )
}

export default Modal;
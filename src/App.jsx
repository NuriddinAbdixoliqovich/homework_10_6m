import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Tab from "./components/Tab";




function App({open, onClose}) {
  const isOpen = false
  
  const [openModal, setOpenModal] = useState(false);

  
  return (
    <>
      <div className="wrapper">
        <button className={`${setOpenModal ? false : "hidden"} modalBtn`}  onClick={() => {setOpenModal(true)}}>
          Open modal
        </button>
        <Modal open={openModal} onClose={() => setOpenModal(false)} />


      </div>
        <Tab/>
    </>
  );
}

export default App;

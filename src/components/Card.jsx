import { useState } from "react";
import Modal from "./Modal"; 
const Card = () => {
  const [showModal, setShowModal] = useState(false);  

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm">
      <div className="flex justify-between font-medium">
        <div className="flex justify-between items-center space-x-1">
          <img className="w-8 h-8 rounded-full" src="src/assets/photo-01.jpg" alt="" />
          <span>Client Name</span>
        </div>
        <div className="flex justify-between items-center space-x-1">
          <img className="w-8 h-8 rounded-full" src="src/assets/photo-02.jpg" alt="" />
          <span>Sadik Istiak</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-gray-600 text-sm mt-5 mb-3"><i className="fa-solid fa-layer-group p-1"></i> Lorem ipsum dolor sit amet, consectetur...</p>
        <span className="font-medium text-gray-600 bg-gray-200 p-1 rounded-md"><i className="fa-solid fa-clipboard-list"></i>  1/2</span>
      </div>
      <div className="flex justify-between items-center font-bold text-gray-700 text-xs mt-2">
        <img className="w-8 h-8 rounded-full" src="src/assets/photo-03.jpg" alt="" />
        <img className="w-8 h-8 rounded-full" src="src/assets/photo-04.jpg" alt="" />
        <span className="font-bold bg-gray-200 p-1 rounded-full">12+</span>
        <span><i className="fa-regular fa-comments"></i>  15</span>
        <div>
          {showModal && <Modal onClose={() => setShowModal(false)} />} 
          <button
            onClick={() => setShowModal(true)} 
          >
            <i className="fa-solid fa-paperclip"></i> 25
          </button>
        </div>
        <span><i className="fa-regular fa-calendar-days"></i>  30-12-2022</span>
      </div>
    </div>
  );
};

export default Card;

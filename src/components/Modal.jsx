import { useState } from "react";
import PropTypes from "prop-types";

const Modal = ({ onClose }) => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h3 className="text-lg font-semibold mb-4">Upload Attachments</h3>
        <input type="file" multiple onChange={handleFileChange} className="w-full mb-4" />
        <ul>
          {files.map((file, index) => (
            <li key={index} className="text-sm">
              {file.name} - {file.type.split("/").pop()}
            </li>
          ))}
        </ul>
        <button className="mt-4 bg-red-500 text-white py-1 px-4 rounded" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;

// src/components/Modal.js
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchFileList, uploadFiles } from "../api/fileService"; // Assume you created these functions

const Modal = ({ onClose }) => {
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // Fetch the file list when the modal opens
  useEffect(() => {
    const loadFiles = async () => {
      try {
        const fileList = await fetchFileList();
        setUploadedFiles(fileList);
      } catch (error) {
        console.error("Error fetching file list:", error);
      }
    };
    loadFiles();
  }, []);

  // Handle file selection and upload
  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleUpload = async () => {
    try {
      await uploadFiles(files);
      const updatedFileList = await fetchFileList();
      alert("Files uploaded successfully!");
      setUploadedFiles(updatedFileList);
      setFiles([]);
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  const handleClose = () => {
    onClose();
    // Reload the page after the modal closes
    window.location.reload(); 
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 modal">
      <div className="bg-white p-6 rounded-lg w-96">
        <h3 className="text-lg font-semibold mb-4">Upload Attachments</h3>

        {/* File upload input */}
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="w-full mb-4"
        />
        <button
          onClick={handleUpload}
          className="bg-blue-500 text-white py-1 px-4 rounded mb-4"
        >
          Upload Files
        </button>

        {/* Display selected files to be uploaded */}
        {files.length > 0 && (
          <ul className="mb-4">
            {files.map((file, index) => (
              <li key={index} className="text-gray-700">
                {file.filename}
              </li>
            ))}
          </ul>
        )}

        {/* Display list of uploaded files */}
        <h4 className="text-lg font-semibold mb-2">Uploaded Files</h4>
        <ul className="max-h-40 overflow-y-auto border-t border-gray-200 pt-2">
          {uploadedFiles.length ? (
            uploadedFiles.map((file, index) => (
              <li key={index} className="text-gray-700 mb-2">
                {file.filename}
              </li>
            ))
          ) : (
            <p className="text-gray-600">No files uploaded.</p>
          )}
        </ul>

        <button
          className="mt-4 bg-red-500 text-white py-1 px-4 rounded"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;

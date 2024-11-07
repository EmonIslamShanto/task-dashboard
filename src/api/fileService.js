import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;  // Ensure this matches your backend server's URL

// Upload Files
export const uploadFiles = async (files) => {
  const formData = new FormData();
  files.forEach(file => formData.append('files', file));

  try {
    const response = await axios.post(`${BASE_URL}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;  // Expecting the uploaded files' information
  } catch (error) {
    console.error("File upload error:", error);
    throw error;
  }
};

// Get List of Uploaded Files
export const fetchFileList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/upload/files`);
    return response.data.files;  // Array of file names
  } catch (error) {
    console.error("Error fetching file list:", error);
    throw error;
  }
};

// Get File Count
export const fetchFileCount = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/upload/count`);
    return response.data.count;  // Total count of files
  } catch (error) {
    console.error("Error fetching file count:", error);
    throw error;
  }
};

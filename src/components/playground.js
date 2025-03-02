import React, { useState } from 'react';
import Navbar from './Navbar.js';
import './playground.css';

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = ['image/jpeg', 'image/png', 'application/pdf', 'text/csv'];
const MAX_FILE_SIZE_MB = MAX_FILE_SIZE / (1024 * 1024);

const Playground = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    
    if (file.size > MAX_FILE_SIZE) {
      setError(`File size exceeds ${MAX_FILE_SIZE_MB} MB`);
      setSelectedFile(null);
    } 
    else if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
      setError(`Only ${ACCEPTED_FILE_TYPES.join(', ')} files are allowed`);
      setSelectedFile(null);
    } 
    else {
      setSelectedFile(file);
      setError(null); 
    }
  };

  return (
    <div className="fullpage">
    <Navbar/>
      <div className="heading">
      <h4>Upload</h4><h4>Dataset</h4>
      </div>
      <div className="file-upload-container">
        <label htmlFor="file-upload" className="upload-label">
          <div className="upload-content">
            <svg className="upload-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="none">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
            </svg>
            <p><strong>Click to upload</strong> or drag and drop</p>
            <p className="upload-info">CSV (MAX. {MAX_FILE_SIZE_MB}MB)</p>
            {selectedFile && <p id="file-name" className="file-selected">{selectedFile.name}</p>}
            {error && <p id="error-message" className="error-message">{error}</p>}
          </div>
        </label>
        {/* The file input is now outside the label and hidden */}
        <input
          id="file-upload"
          type="file"
          accept=".csv"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default Playground;

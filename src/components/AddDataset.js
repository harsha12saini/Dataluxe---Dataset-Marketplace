import { useState } from 'react';
import './AddDataset.css';
import Navbar from './Navbar.js';

const AddDataset = () => {
  const [price, setPrice] = useState(0);
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState('');
  const [setFile] = useState(null);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleTagChange = (event) => {
    setCurrentTag(event.target.value);
  };

  const handleTagSubmit = (event) => {
    if (event.key === 'Enter' && currentTag.trim() !== '') {
      setTags((prevTags) => [...prevTags, currentTag]);
      setCurrentTag('');
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission (like sending the dataset and price to the server)
    alert('Dataset uploaded');
  };

  return (
    <div className="add-dataset-container">
    <Navbar/>
      <h1 className="title">Add New Dataset</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="input-group">
          <label>Dataset File</label>
          <div className="upload-area">
            <i className="fas fa-cloud-upload-alt icon"></i>
            <p>Click to upload or drag and drop</p>
            <p>CSV (MAX. 1 MB)</p>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="input-group">
          <label>Price</label>
          <input
            type="number"
            className="input-field"
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <div className="input-group">
          <label>Tags</label>
          <div className="tags-container">
            <input
              type="text"
              className="input-field"
              value={currentTag}
              onChange={handleTagChange}
              onKeyDown={handleTagSubmit}
              placeholder="Type and press enter to add tags"
            />
          </div>
          <div className="tags-list">
            {tags.map((tag, index) => (
              <span key={index} className="tag-item">
                {tag}
                <button type="button" className="removetag" onClick={() => handleTagRemove(tag)}>x</button>
              </span>
            ))}
          </div>
        </div>
        <div className="buttoncontainer">
          <button type="submit" className="uploadbutton">Upload Dataset</button>
          <button type="button" className="cancelbutton">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddDataset;

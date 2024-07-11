// src/components/CreateDiscussion.jsx
import React, { useState } from 'react';
import './CreateDiscussions.css';

const CreateDiscussion = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [mediaFiles, setMediaFiles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare FormData to send files and other data
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    mediaFiles.forEach((file, index) => {
      formData.append(`media${index}`, file);
    });

    // Perform submission logic, e.g., send formData to server
    console.log('Discussion Created:', { title, content, mediaFiles });
    
    // Reset state after submission
    setTitle('');
    setContent('');
    setMediaFiles([]);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setMediaFiles([...mediaFiles, ...files]);
  };

  return (
    <div className='addDiscussion'>
      <h1>Share your ideas</h1>
      <form onSubmit={handleSubmit}>
        <div className='title'>
          <label>Title: </label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>
        <div className='content'>
          <label>Content: </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter your discussion content..."
          />
        </div>
        <div className='media'>
          <label>Images/Videos: </label>
          <input 
            type="file"
            onChange={handleFileChange}
            accept="image/*, video/*"
            multiple  // Allows multiple file selection
          />
        </div>
        <button className='subbtn' type="submit">Share</button>
      </form>
    </div>
  );
};

export default CreateDiscussion;


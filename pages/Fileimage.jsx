import React, { useState } from 'react';

function ImageUpload() {

  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    try {
      await axios.post('/api/upload', formData);
      alert('Image uploaded successfully');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="image" onChange={handleFileInputChange} />
      <button type="submit">Upload</button>
    </form>
  );
}

export default ImageUpload;

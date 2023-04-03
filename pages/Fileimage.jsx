import React, { useState } from "react";

function FileImage() {
  const [images, setImages] = useState(Array(6).fill(null));

  const handleImageChange = (event, index) => {
    const newImages = [...images];
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        // Validate the image here
        if (file.type !== "image/jpeg" && file.type !== "image/png") {
          alert("Please upload a JPEG or PNG image.");
          return;
        }
        newImages[index] = file;
        setImages(newImages);
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form with the validated images here
  };

  const allImagesUploaded = images.every((image) => image !== null);

  return (
    <form onSubmit={handleSubmit}>
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <div key={index}>
          <label htmlFor={`image-input-${index}`}>
            {images[index] ? `Image ${index + 1} selected` : `Select image ${index + 1}`}
          </label>
          <input
            type="file"
            id={`image-input-${index}`}
            accept="image/*"
            required={!images[index]}
            onChange={(event) => handleImageChange(event, index)}
          />
        </div>
      ))}
      <button type="submit" disabled={!allImagesUploaded}>
        Submit
      </button>
    </form>
  );
}

export default FileImage;

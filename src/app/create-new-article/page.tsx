'use client'
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown"; // Import the markdown renderer

const createNewArticlePage = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null); // State to hold the selected image file
  const [imagePreview, setImagePreview] = useState(null); // State for the image preview URL
  const [content, setContent] = useState(""); // State to hold the markdown content

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first file
    if (file) {
      // Check if the file is an image (you can customize this based on your needs)
      if (!file.type.startsWith("image/")) {
        alert("Please upload an image file.");
        return;
      }

      setImage(file); // Update the image file state

      // Create a URL for the image to show a preview
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl); // Update the preview URL
    }
  };

  // Cleanup object URL when the component unmounts or when image changes
  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview); // Cleanup the object URL
      }
    };
  }, [imagePreview]);

  // Optionally, handle image reset
  const handleReset = () => {
    setImage(null); // Reset image file
    setImagePreview(null); // Reset image preview URL
  };

  return (
    <form className="ml-56 mt-12 w-[760px]">
      <div className="flex flex-row justify-start">
        <h1 className="text-[28px] leading-[32px] mb-6">Create new Article</h1>
        <button type="submit" className="btn ml-8">
          Publish Article
        </button>
      </div>

      {/* Title input field */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-[16px]">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="My first article"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>


      <div className="mb-4">
        <label htmlFor="image" className="block text-[16px]">
          Featured Image
        </label>
        {!imagePreview && (<input
          type="file"
          accept="image/*" // Restrict file types to images only
          onChange={handleFileChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        /> )}
      </div>


      {/* Image preview */}
      {imagePreview && (
        <div className="mb-4">
          <img
            src={imagePreview}
            alt="Uploaded Preview"
            className="max-w-xs max-h-64 object-cover rounded-lg"
          />
        </div>
      )}

      {/* Reset button for image */}
      {imagePreview && (
        <button
          type="button"
          onClick={handleReset}
          className="mt-4 p-2 bg-red-500 text-white rounded"
        >
          Reset Image
        </button>
      )}

      {/* Markdown input */}
      <div className="mb-4">
        <label htmlFor="content" className="block text-[16px]">
          Article Content (Markdown Supported)
        </label>
        <textarea
          id="content"
          name="content"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          rows="12"
          placeholder="Write your article in markdown..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      {/* Render the markdown content below the textarea */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Preview:</h2>
        <div className="prose">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </form>
  );
};

export default createNewArticlePage;

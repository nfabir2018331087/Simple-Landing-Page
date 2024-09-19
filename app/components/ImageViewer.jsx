'use client'

import { useState } from 'react';

export default function ImageViewer() {
  const productImages = [
    '/bag.jpeg',
    '/bag2.png',
    '/bag3.png',
  ];

  const [currentImage, setCurrentImage] = useState(productImages[0]);

  return (
    <div className="flex justify-center items-center space-x-4">
      <div className="space-y-4">
        {productImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setCurrentImage(image)} // Click event to update the large image
            className={`w-20 h-20 object-cover cursor-pointer rounded-lg ${
              currentImage === image ? 'border-4 border-red-600' : 'border'
            }  transform duration-300 hover:scale-105`}
          />
        ))}
      </div>

      {/* Large image view (right side) */}
      <div>
        <img
          src={currentImage}
          alt="Large View"
          className="w-96 h-96 object-cover rounded-lg border shadow-lg"
        />
      </div>
    </div>
  );
};

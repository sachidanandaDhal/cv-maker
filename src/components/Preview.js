// Preview.js
import React from 'react';

const Preview = ({ formData }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-700">{formData.name}</h1>
      <p className="text-sm text-gray-500">{formData.email}</p>
      <p className="text-sm text-gray-500">{formData.phone}</p>
      <h2 className="text-xl font-semibold mt-4 text-gray-800">Education</h2>
      <p className="text-gray-600">{formData.education}</p>
      <h2 className="text-xl font-semibold mt-4 text-gray-800">Experience</h2>
      <p className="text-gray-600">{formData.experience}</p>
    </div>
  );
};

export default Preview;

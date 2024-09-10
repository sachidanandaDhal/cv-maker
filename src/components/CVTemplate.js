// CVTemplate.js
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const CVTemplate = ({ formData }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <div
        ref={componentRef}
        className="p-8 bg-white shadow-md rounded-lg font-sans"
      >
        <h1 className="text-4xl font-bold text-blue-600">{formData.name}</h1>
        <p className="text-md text-gray-600 mt-2">{formData.email}</p>
        <p className="text-md text-gray-600 mt-1">{formData.phone}</p>

        <div className="mt-4">
          <h2 className="text-2xl font-semibold text-blue-500">Education</h2>
          <p className="text-gray-700">{formData.education}</p>
        </div>

        <div className="mt-4">
          <h2 className="text-2xl font-semibold text-blue-500">Experience</h2>
          <p className="text-gray-700">{formData.experience}</p>
        </div>
      </div>

      <button
        onClick={handlePrint}
        className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500"
      >
        Download as PDF
      </button>
    </div>
  );
};

export default CVTemplate;

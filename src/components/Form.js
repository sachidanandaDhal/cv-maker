// Form.js
import React from 'react';

const Form = ({ onInputChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onInputChange((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="bg-white p-6 rounded-lg shadow-lg space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
        className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
        className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <textarea
        name="education"
        placeholder="Education"
        onChange={handleChange}
        className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      ></textarea>
      <textarea
        name="experience"
        placeholder="Experience"
        onChange={handleChange}
        className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      ></textarea>
    </form>
  );
};

export default Form;

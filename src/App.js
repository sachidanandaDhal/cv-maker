// App.js
import React, { useState } from 'react';
import Form from './components/Form';
import Preview from './components/Preview';
import CVTemplate from './components/CVTemplate';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
  });

  const [selectedTemplate, setSelectedTemplate] = useState('template1');

  const handleInputChange = (data) => {
    setFormData(data);
  };

  const handleTemplateChange = (e) => {
    setSelectedTemplate(e.target.value);
  };

  return (
    <div className="App">
      <h1>CV Maker</h1>
      <Form onInputChange={handleInputChange} />
      <select onChange={handleTemplateChange} value={selectedTemplate}>
        <option value="template1">Template 1</option>
        <option value="template2">Template 2</option>
      </select>
      {selectedTemplate === 'template1' && <Preview formData={formData} />}
      {selectedTemplate === 'template2' && <CVTemplate formData={formData} />}
    </div>
  );
}

export default App;

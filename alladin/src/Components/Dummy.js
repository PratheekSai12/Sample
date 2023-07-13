import React, { useState } from 'react';

const App = () => {
  const [files, setFiles] = useState([]);
  const [responses, setResponses] = useState([]);

  const handleFileChange = (event) => {
    setFiles(Array.from(event.target.files));
  };

  const handleUpload = async () => {
    const formData = new FormData();

    files.forEach((file) => {
      formData.append('files', file, file.name);
    });
    console.log(files)
    console.log(responses)
    console.log(formData)
    try {
      const response = await fetch('API_ENDPOINT', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setResponses(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <ul>
        {responses.map((response) => (
          <li key={response.fileName}>{response.fileName}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

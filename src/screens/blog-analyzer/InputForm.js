import React from "react";

const InputForm = ({ urls, handleChange, processUrls }) => {
  return (
    <div>
      <h2>News Article URLs</h2>
      {urls.map((url, index) => (
        <input
          key={index}
          type="text"
          value={url}
          onChange={(e) => handleChange(index, e.target.value)}
          placeholder={`URL ${index + 1}`}
        />
      ))}
      <button onClick={processUrls}>Process URLs</button>
    </div>
  );
};

export default InputForm;
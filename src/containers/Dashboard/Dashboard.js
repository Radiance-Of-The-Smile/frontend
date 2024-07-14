import React, { useState } from "react";
import './Dashboard.css';

const Dashboard = ({ api }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [anomalies, setAnomalies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fileInputRef = React.useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleRemoveImage = () => {
    setProcessedImage(null);
    setAnomalies([]);
    setSelectedFile(null);
  }

  const handleUpload = async () => {
    setLoading(true);

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await api.post("/preprocess", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });
      console.log(response.data)
      setProcessedImage(response.data.processed_image);
      setAnomalies(response.data.anomalies);
      setError("");
    } catch (error) {
      console.error("Error uploading image:", error);
      setError("Failed to upload image. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="dashboard">

      {/* <input type="file" onChange={handleFileChange} className="file-input" /> */}
      {!selectedFile && (
        <div style={{"display":"flex", "justify-content": "center"}}>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="file-input"
            style={{ display: 'none' }} // Hidden input
            accept=".jpg, .jpeg, .png"
          />
          <button className="custom-file-upload" onClick={handleButtonClick}>
            Upload Image
          </button>
        </div>
      )}

      {selectedFile && (
        <div className="action-buttons">
          {!loading && (
            <div>
              {!processedImage && (
                <button onClick={handleUpload} className="upload-button">Get Analysis</button>
              )}
              <button style={{"background-color": "#aa0000"}} onClick={handleRemoveImage} className="remove-button">Delete</button>
            </div>
          )}
          {loading && <div className="loading">Processing...</div>}
          {processedImage && (
            <div>
              <a href={`data:image/png;base64, ${processedImage}`} download="processed_image.png" className="download-link">
                <button className="download-button">Download Analysis</button>
              </a>
            </div>
          )}
          {/* <hr /> */}
        </div>
      )}
      {error && <p className="error-message">{error}</p>}
      {processedImage && (
        <div className="processed-image">
          <h2>Processed Image</h2>
          <img
            src={`data:image/png;base64, ${processedImage}`}
            alt="Processed"
          />
        </div>
      )}
      {anomalies.length > 0 && (
        <div className="anomalies">
          <h2>Anomalies</h2>
          <ul>
            {anomalies.map((anomaly, index) => (
              <li key={index}>{anomaly}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
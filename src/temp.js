import React, { useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:8000/`
})

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [anomalies, setAnomalies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleRemoveImage = () => {
    setProcessedImage(null);
    setAnomalies([]);
    setSelectedFile(null);
  }

  const handleUpload = async () => {
    setLoading(true); // Set loading to true while uploading

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

    setLoading(false); // Set loading back to false after response
  };

  return (
    <div className="App" style={{ margin: "20px" }}>

      <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>Radiance Of The Smile: A Complete Deep Learning Approach</h1>
      <input type="file" onChange={handleFileChange} style={{ marginBottom: "10px" }} />

      {selectedFile && (
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <button onClick={handleUpload}>Get Analysis</button>
          {loading && <div>Processing...</div>}
          {processedImage && (
              <div>
                <br/>
                <a href={`data:image/png;base64, ${processedImage}`} download="processed_image.png">
                  <button style={{ marginBottom: "10px" }}>Download Analysis</button>
                </a>&nbsp;
                <button onClick={handleRemoveImage}>Remove Analysis</button>
              </div>
          )}
          <hr />
        </div>
      )}
      {error && <p style={{ color: "red", textAlign: "center", marginBottom: "10px" }}>{error}</p>}
      {processedImage && (
        <div style={{ marginBottom: "20px" }}>
          <h2>Processed Image:</h2>
          <img
            src={`data:image/png;base64, ${processedImage}`}
            alt="Processed"
            style={{ display: 'block', maxWidth: '100%', margin: 'auto'}}
          />
        </div>
      )}
      {anomalies.length > 0 && (
        <div style={{ marginBottom: "20px" }}>
          <h2>Anomalies:</h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {anomalies.map((anomaly, index) => (
              <li key={index} style={{ marginBottom: "5px" }}>{anomaly}</li>
            ))}
          </ul>
        </div>
      )}
      <footer style={{ marginTop: "20px", textAlign: "center", fontStyle: "italic", color: "#888" }}>
        &copy; 2024 Radiance Of The Smile. All Rights Reserved. Developed by{" "}
        <a href="https://github.com/ibbee">Muhammad Ibrahim</a>,{" "}
        <a href="https://github.com/hassan-arif">Hassan Mahmood</a>, and{" "}
        <a href="https://github.com/HafizUzair14">Hafiz Uzair Warsi</a>. Special thanks to our supervisor{" "}
        {/* <a href="#">Mr. Hamad Ul Qudous</a>. */}
      </footer>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import axios from "axios";

function ImageAnalysisPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // Handle file selection and set a preview URL
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setResult(null);
      setError(null);
    }
  };

  // Handle form submission and send the image to the backend API
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      setError("Please select an image file.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      // Replace the URL with your actual Spring Boot backend endpoint
      const response = await axios.post(
        "http://localhost:8080/api/emotion/analyze-image",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setResult(response.data); // Expected response: { emotion: "Happy", emotions: { Happy: 0.85, Sad: 0.05, ... } }
    } catch (err) {
      console.error(err);
      setError("Image analysis failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      {/* Header Section */}
      <div className="mb-4 text-center">
        <h1>Image Emotion Analysis</h1>
        <p className="text-muted">Upload an image to detect facial emotions.</p>
      </div>

      {/* File Upload Form */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="imageInput">Select Image</label>
              <input
                type="file"
                className="form-control-file"
                id="imageInput"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
            {previewUrl && (
              <div className="mb-3 text-center">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="img-fluid rounded"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            )}
            {error && <div className="alert alert-danger mt-3">{error}</div>}
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Analyze Image
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Loading Indicator */}
      {loading && (
        <div className="text-center mt-4">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Analyzing...</span>
          </div>
          <p>Analyzing image...</p>
        </div>
      )}

      {/* Results Section */}
      {result && (
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h4>Analysis Results</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  <strong>Detected Emotion:</strong> {result.emotion}
                </p>
                {/* Optional: Display a breakdown of emotions if provided */}
                {result.emotions && (
                  <>
                    <h5>Emotion Breakdown:</h5>
                    <ul className="list-group">
                      {Object.entries(result.emotions).map(
                        ([emotion, score]) => (
                          <li
                            key={emotion}
                            className="list-group-item d-flex justify-content-between align-items-center"
                          >
                            {emotion}
                            <span className="badge badge-primary badge-pill">
                              {(score * 100).toFixed(1)}%
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageAnalysisPage;

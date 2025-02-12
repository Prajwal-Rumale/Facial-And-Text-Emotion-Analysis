import React, { useState } from "react";
import axios from "axios";

function TextAnalysisPage() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // Handle form submission to analyze text
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) {
      setError("Please enter some text to analyze.");
      return;
    }

    setError(null);
    setLoading(true);
    setResult(null);

    try {
      // POST request to your Spring Boot backend endpoint
      const response = await axios.post("http://localhost:8080/api/emotion/analyze-text", { text });
      setResult(response.data); // Expected response: { overallSentiment: "Positive", emotions: { Happy: 0.85, Sad: 0.05, ... } }
    } catch (err) {
      console.error(err);
      setError("Failed to analyze text. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="container my-5">
      {/* Header Section */}
      <div className="mb-4 text-center">
        <h1>Text Emotion Analysis</h1>
        <p className="text-muted">Enter your text below to detect the emotional tone.</p>
      </div>

      {/* Form Section */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="textInput">Your Text</label>
              <textarea
                id="textInput"
                className="form-control"
                rows="6"
                placeholder="Type or paste your text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
            {error && <div className="alert alert-danger mt-3">{error}</div>}
            <div className="text-center mt-4">
              <button type="submit" className="btn btn-primary">
                Analyze Text
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
          <p>Analyzing text...</p>
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
          <p className="card-text">
            <strong>Confidence:</strong> {(result.confidence * 100).toFixed(1)}%
          </p>
          {result.emotions && (
            <>
              <h5>Emotion Breakdown:</h5>
              <ul className="list-group">
                {Object.entries(result.emotions).map(([emotion, score]) => (
                  <li
                    key={emotion}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {emotion}
                    <span className="badge badge-primary badge-pill">
                      {(score * 100).toFixed(1)}%
                    </span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  </div>
)}

      {/* Feedback Section */}
      {result && (
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body text-center">
                <p>Was this analysis helpful?</p>
                <div className="btn-group" role="group" aria-label="Feedback">
                  <button type="button" className="btn btn-success">Yes</button>
                  <button type="button" className="btn btn-danger">No</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default TextAnalysisPage;

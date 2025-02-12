import React, { useState } from "react";

const dummyResults = [
  { id: 1, type: "Text", emotion: "Happy", date: "2023-12-01" },
  { id: 2, type: "Image", emotion: "Sad", date: "2023-12-02" },
  // Add more dummy entries or fetch from your backend
];

function ResultsHistoryPage() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(dummyResults);

  const filteredResults = results.filter(
    (result) =>
      result.emotion.toLowerCase().includes(search.toLowerCase()) ||
      result.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Results History & Analytics</h1>
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by emotion or type..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="list-group">
        {filteredResults.length > 0 ? (
          filteredResults.map((result) => (
            <a
              key={result.id}
              href={`/results/${result.id}`}
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{result.type} Analysis</strong> – {result.emotion}
              </div>
              <span className="badge bg-primary rounded-pill">{result.date}</span>
            </a>
          ))
        ) : (
          <p className="text-center">No results found.</p>
        )}
      </div>
    </div>
  );
}

export default ResultsHistoryPage;

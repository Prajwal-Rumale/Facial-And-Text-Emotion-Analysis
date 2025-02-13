import React from "react";

function AboutHelpPage() {
  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">About & Help</h1>
      <section className="mb-5">
        <h2>About Emotion Analyzer</h2>
        <p>
          Emotion Analyzer is an advanced AI-powered system that integrates
          deep learning and natural language processing to detect emotions from
          both text and images. Initially developed during my BTech and later
          expanded in my PG Diploma, this system offers real-time emotion
          detection useful for applications in mental health, customer service,
          and analytics.
        </p>
      </section>
      <section className="mb-5">
        <h2>Frequently Asked Questions (FAQ)</h2>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeadingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapseOne"
                aria-expanded="true"
                aria-controls="faqCollapseOne"
              >
                How accurate is the emotion detection?
              </button>
            </h2>
            <div
              id="faqCollapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="faqHeadingOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Our system achieves high accuracy by leveraging state-of-the-art
                deep learning models and large-scale datasets such as AffectNet.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeadingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapseTwo"
                aria-expanded="false"
                aria-controls="faqCollapseTwo"
              >
                How long does analysis take?
              </button>
            </h2>
            <div
              id="faqCollapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="faqHeadingTwo"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Text analysis is performed in real-time (within seconds), and
                image analysis typically takes a few seconds depending on the
                complexity of the input.
              </div>
            </div>
          </div>
          {/* Add more FAQ items as needed */}
        </div>
      </section>
      <section>
        <h2>Contact Support</h2>
        <p>
          If you have any questions or need further assistance, please contact
          us at <a href="mailto:support@emotionanalyzer.com">support@emotionanalyzer.com</a>.
        </p>
      </section>
    </div>
  );
}

export default AboutHelpPage;

import React from "react";
import { Link } from "react-router-dom";
import { FaSmile, FaLanguage, FaImage, FaPhone, FaEnvelope } from "react-icons/fa";

// Header Component: Displays logo and navigation links
const Header = () => (
  <header className="bg-white shadow sticky-top">
    <div className="container d-flex justify-content-between align-items-center py-4">
      <div className="d-flex align-items-center">
        {/* Replace '/logo.png' with your actual logo path */}
        <img src="/logo.png" alt="Logo" className="h-8 w-8" /> 
        <span className="fs-4 fw-bold ms-2 text-dark">Emotion Analyzer</span>
      </div>
      <nav>
        <ul className="d-flex list-unstyled mb-0">
          <li className="mx-3"><Link to="/" className="text-secondary hover:text-primary">Home</Link></li>
          <li className="mx-3"><Link to="/text-analysis" className="text-secondary hover:text-primary">Text Analysis</Link></li>
          <li className="mx-3"><Link to="/image-analysis" className="text-secondary hover:text-primary">Image Analysis</Link></li>
          <li className="mx-3"><Link to="/about" className="text-secondary hover:text-primary">About</Link></li>
          <li className="mx-3"><Link to="/help" className="text-secondary hover:text-primary">Help</Link></li>
          <li className="mx-3"><Link to="/contact" className="text-secondary hover:text-primary">Contact</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);


// Hero Section: Welcomes users with a headline and call-to-action buttons
const Hero = () => (
  <section className="bg-primary text-white py-5">
    <div className="container text-center">
      <h1 className="display-4 fw-bold mb-4">
        Detect Emotions in Text & Images with Advanced AI
      </h1>
      <p className="lead mb-4">
        Our cutting-edge system analyzes emotions in real time, enabling applications in mental health, customer service, and analytics.
      </p>
      <div className="d-flex justify-content-center gap-3 flex-column flex-md-row">
        <Link 
          to="/text-analysis" 
          className="btn btn-light btn-lg mb-3 mb-md-0"
        >
          Analyze Text
        </Link>
        <Link 
          to="/image-analysis" 
          className="btn btn-light btn-lg"
        >
          Analyze Image
        </Link>
      </div>
    </div>
  </section>
);


// Features Section: Highlights key features using modular cards
const Features = () => (
  <section className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-5">Key Features</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <FaSmile className="text-primary mb-4" style={{ fontSize: '2.5rem' }} />
              <h5 className="card-title">Real-time Analysis</h5>
              <p className="card-text">
                Get immediate emotion feedback from text and images.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="col">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <FaLanguage className="text-primary mb-4" style={{ fontSize: '2.5rem' }} />
              <h5 className="card-title">Multi-lingual Support</h5>
              <p className="card-text">
                Analyze text emotions in multiple languages effortlessly.
              </p>
            </div>
          </div>
        </div> */}
        <div className="col">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <FaImage className="text-primary mb-4" style={{ fontSize: '2.5rem' }} />
              <h5 className="card-title">Advanced Image Analysis</h5>
              <p className="card-text">
                Accurately detect and interpret facial emotions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Footer Component: Contains quick links and contact information
const Footer = () => (
  <footer className="bg-dark text-light py-4">
    <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
      <div className="d-flex align-items-center mb-3 mb-md-0">
        <img src="/logo.png" alt="Logo" className="h-8 w-8 me-2" />
        <span className="fs-5 fw-bold">Emotion Analyzer</span>
      </div>
      <div className="d-flex mb-3 mb-md-0">
        <a href="/privacy" className="text-light mx-3">Privacy Policy</a>
        <a href="/terms" className="text-light mx-3">Terms of Use</a>
      </div>
      <div className="d-flex">
        <a href="mailto:contact@emotionanalyzer.com" className="text-light mx-3">
          <FaEnvelope />
        </a>
        <a href="tel:+1234567890" className="text-light mx-3">
          <FaPhone />
        </a>
      </div>
    </div>
    <div className="text-center text-sm mt-4">
      © {new Date().getFullYear()} Emotion Analyzer. All rights reserved.
    </div>
  </footer>
);


// LandingPage Component: Combines all sections into one page
const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default LandingPage;

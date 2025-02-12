# Facial & Text Emotion Analysis

**AI-Powered Emotion Detection System**  
_A Multi-Modal Emotion Analysis Platform using Deep Learning, NLP, and Microservices_

---

## Overview

Facial & Text Emotion Analysis is a full-stack project designed to analyze human emotions from both text and images. Originally developed during my BTech (2023) as a CNN-based facial emotion detection model, the project was later upgraded during my PG Diploma (2024) into a modular, microservices-based system. This system consists of:

- A **text emotion analysis module** leveraging transformer-based models (DistilBERT) to classify sentiments.
- An **image emotion analysis module** utilizing CNN/ResNet50 (and optionally Vision Transformers) trained on datasets like AffectNet.
- A **Spring Boot backend** that integrates with Python-based microservices (Flask) to process AI requests.
- A **React + Bootstrap frontend** for a responsive, user-friendly experience.

---

## Features

- **Multi-Modal Analysis:** Detect emotions from both text and images.
- **Microservices Architecture:** Decoupled backend services for scalability and maintainability.
- **Modern Frontend:** Responsive UI built with React and Bootstrap.
- **RESTful API Integration:** Seamless communication between the frontend, Spring Boot backend, and Python microservices.
- **Data Persistence:** Analysis results stored in a MySQL database for history and analytics.
- **Planned Enhancements:** Future integration of advanced models (e.g., Vision Transformers) and extended analytics dashboards.

---

## Architecture & Microservices

### What are Microservices?
Microservices are an architectural style where an application is built as a collection of loosely coupled services. Each service is independent, focusing on a specific functionality, and communicates with others via lightweight protocols (typically HTTP/REST).

### Why Use Microservices?
- **Scalability:** Each service can be scaled independently based on load.
- **Flexibility:** Technology stacks can vary between services; for example, using Python for AI models and Java (Spring Boot) for business logic.
- **Maintainability:** Smaller, well-defined codebases are easier to manage, test, and update.
- **Resilience:** Failures in one service do not bring down the entire system.

### Our System’s Flow:
1. **Frontend (React + Bootstrap):**  
   - Provides interfaces for text input, image upload, result visualization, and user management.
2. **Backend (Spring Boot):**  
   - Acts as an API gateway, orchestrating requests between the frontend and microservices.
   - Forwards text and image data to the respective Python microservices.
3. **Python Microservices (Flask):**  
   - **Text Analysis Service:** Uses a transformer model (DistilBERT) to analyze sentiment.
   - **Image Analysis Service:** Uses a CNN/ResNet50 model trained on AffectNet to detect facial emotions.
4. **Data Storage (MySQL):**  
   - Stores analysis results, user history, and metadata for analytics.

---

## Technologies Used

- **Frontend:** React, Bootstrap, Axios, React Router
- **Backend:** Spring Boot, Java, RESTful APIs
- **Machine Learning & AI:** TensorFlow, Keras, Hugging Face Transformers, OpenCV
- **Microservices Communication:** REST APIs, CORS configuration
- **Database:** MySQL
- **Deployment (Planned):** Docker, AWS/GCP (for containerized deployment)

---

## Installation & Setup

### Prerequisites

- **Java JDK 11+** and **Maven** for the Spring Boot backend.
- **Python 3.8+** with a virtual environment for Flask microservices.
- **Node.js & npm** for the React frontend.
- **MySQL** installed and configured.

### Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/<your-username>/Facial-And-Text-Emotion-Analysis.git
   cd Facial-And-Text-Emotion-Analysis


## Usage

**Landing Page:**
- Introduces the application and provides navigation to text and image analysis.

**Text Emotion Analysis:**
- Input text into a large textarea.
- Click "Analyze Text" to receive real-time sentiment and emotion breakdown.

**Image Emotion Analysis:**
- Upload an image via the drag-and-drop interface.
- Click "Analyze Image" to detect facial emotions.

**Results History & Analytics:**
- View past analysis results, filter by emotion, and see detailed breakdowns.

**User Profile & Settings:**
- Update personal information and configure analysis preferences.

**About & Help:**
- Provides an overview of the project, FAQs, and support contact details.

## Future Enhancements
- **Advanced Image Analysis:** Incorporate Vision Transformers (ViT) for improved accuracy.
- **Enhanced Analytics Dashboard:** Develop detailed visualizations and historical trends using libraries like Chart.js.
- **Deployment:** Containerize the application using Docker and deploy on cloud platforms (AWS, GCP, etc.).
- **User Authentication:** Integrate Spring Security for secure user management.

## Acknowledgments
- **TensorFlow & Keras:** For providing robust deep learning frameworks.
- **Hugging Face:** For pre-trained transformer models that simplify text emotion analysis.
- **Spring Boot & React:** For enabling rapid development of scalable, modern web applications.
- **Community & Open Source Contributors:** Whose work and documentation have greatly aided this project.



## Contact
For any questions, suggestions, or collaboration opportunities, please contact:

- **Email:** [prajwal21r@gmail.com](mailto:prajwal21r@gmail.com)
- **LinkedIn:** [www.linkedin.com/in/prajwal-rumale](https://www.linkedin.com/in/prajwal-rumale)
- **GitHub:** [https://github.com/Prajwal-Rumale](https://github.com/Prajwal-Rumale)




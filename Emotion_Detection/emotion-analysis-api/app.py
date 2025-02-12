from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import numpy as np
from transformers import pipeline
from flask_cors import CORS
from io import BytesIO

# Initialize Flask App
app = Flask(__name__)
CORS(app)

import tensorflow as tf

class CustomInputLayer(tf.keras.layers.InputLayer):
    def __init__(self, **kwargs):
        # If 'batch_shape' is provided, rename it to 'batch_input_shape'
        if 'batch_shape' in kwargs:
            kwargs['batch_input_shape'] = kwargs.pop('batch_shape')
        super(CustomInputLayer, self).__init__(**kwargs)


# Load Trained Model with CustomInputLayer
model = load_model(
    r"D:\Prajwal\Projects\emotion-analysis-api\FacialEmotionDetection.h5",
    #custom_objects={'InputLayer': CustomInputLayer}
)

# Emotion Labels (Must match the order in your dataset)
emotion_labels = ["Neutral", "Happy", "Sad", "Surprise", "Fear", "Anger", "Disgust", "Contempt"]

@app.route("/analyze-image", methods=["POST"])
def predict_emotion():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

        # Get the file from the request
        file = request.files["file"]

        # Wrap the file data in a BytesIO object
        file_bytes = BytesIO(file.read())
        file_bytes.seek(0)  # Ensure the pointer is at the start of the stream

        # Use load_img with the BytesIO stream and target size
        image = load_img(file_bytes, target_size=(48, 48))
        image_array = img_to_array(image) / 255.0
        image_array = np.expand_dims(image_array, axis=0)

        # Make Prediction
        predictions = model.predict(image_array)
        predicted_emotion = emotion_labels[np.argmax(predictions)]

        return jsonify({"emotion": predicted_emotion})

# --- Text Emotion Detection ---
# Initialize a text classification pipeline using a transformer model
text_emotion_model = pipeline("text-classification", model="bhadresh-savani/distilbert-base-uncased-emotion")

@app.route("/analyze-text", methods=["POST"])
def analyze_text_emotion():
    data = request.get_json()
    if not data or "text" not in data:
        return jsonify({"error": "No text provided"}), 400

    text = data["text"]
    prediction = text_emotion_model(text)[0]

    # Add a breakdown, even if minimal
    emotions_breakdown = {
        prediction["label"]: prediction["score"],
        "Neutral": 0.05,  # Dummy values for demonstration
        "Sad": 0.05
    }

    return jsonify({
        "emotion": prediction["label"],
        "confidence": prediction["score"],
        "emotions": emotions_breakdown  # Always include emotions
    })



if __name__ == "__main__":
    app.run(debug=True)

from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib

# =========================
# LOAD MODEL & ENCODER
# =========================

model = joblib.load("burnout_model.pkl")
label_encoder = joblib.load("label_encoder.pkl")

# =========================
# CREATE FLASK APP
# =========================

app = Flask(__name__)

CORS(app)

# =========================
# HOME ROUTE
# =========================

@app.route("/")
def home():
    return "Student Burnout Prediction API Running"

# =========================
# PREDICTION ROUTE
# =========================

@app.route("/predict", methods=["POST"])
def predict():

    try:

        data = request.json

        features = np.array([[
            data["Sleep_Hours"],
            data["Assignment_Count"],
            data["Screen_Time_Hours"],
            data["Attendance_Percentage"],
            data["Study_Hours"],
            data["Social_Media_Usage_Hours"],
            data["Burnout_Score"]
        ]])

        prediction = model.predict(features)

        result = label_encoder.inverse_transform(prediction)

        return jsonify({
            "prediction": result[0]
        })

    except Exception as e:

        return jsonify({
            "error": str(e)
        })

# =========================
# RUN SERVER
# =========================

if __name__ == "__main__":
    app.run(debug=True)
import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaChartLine,
  FaUserGraduate,
  FaLaptop,
  FaMoon,
  FaBookOpen,
  FaFire
} from "react-icons/fa";

import "../styles/Home.css";

function Home() {

  const [formData, setFormData] = useState({
    Sleep_Hours: "",
    Assignment_Count: "",
    Screen_Time_Hours: "",
    Attendance_Percentage: "",
    Study_Hours: "",
    Social_Media_Usage_Hours: "",
    Burnout_Score: ""
  });

  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {

    try {

      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        formData
      );

      setPrediction(response.data.prediction);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);

      alert("Prediction Failed");
    }
  };

  return (

    <div className="main-container">

      {/* BACKGROUND EFFECTS */}

      <div className="bg-circle one"></div>
      <div className="bg-circle two"></div>
      <div className="bg-circle three"></div>

      {/* LEFT SECTION */}

      <motion.div
        className="left-section"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >

        <div className="logo-box">
          <FaBrain className="logo-icon" />
          <h1>Burnout AI</h1>
        </div>

        <h2>
          Student Burnout Prediction System
        </h2>

        <p>
          AI-powered student stress analysis platform that predicts burnout levels
          using machine learning algorithms and behavioral analytics.
        </p>

        <div className="stats-grid">

          <div className="stat-card">
            <FaUserGraduate className="stat-icon" />
            <h3>500+</h3>
            <p>Students Analysed</p>
          </div>

          <div className="stat-card">
            <FaChartLine className="stat-icon" />
            <h3>95%</h3>
            <p>Prediction Accuracy</p>
          </div>

          <div className="stat-card">
            <FaLaptop className="stat-icon" />
            <h3>AI Powered</h3>
            <p>Smart Analytics</p>
          </div>

          <div className="stat-card">
            <FaFire className="stat-icon" />
            <h3>Real-Time</h3>
            <p>Stress Detection</p>
          </div>

        </div>

      </motion.div>

      {/* RIGHT SECTION */}

      <motion.div
        className="right-section"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >

        <div className="form-card">

          <h2 className="form-title">
            Predict Student Stress Level
          </h2>

          <div className="input-grid">

            <div className="input-box">
              <FaMoon className="input-icon" />
              <input
                type="number"
                placeholder="Sleep Hours"
                name="Sleep_Hours"
                onChange={handleChange}
              />
            </div>

            <div className="input-box">
              <FaBookOpen className="input-icon" />
              <input
                type="number"
                placeholder="Assignment Count"
                name="Assignment_Count"
                onChange={handleChange}
              />
            </div>

            <div className="input-box">
              <FaLaptop className="input-icon" />
              <input
                type="number"
                placeholder="Screen Time Hours"
                name="Screen_Time_Hours"
                onChange={handleChange}
              />
            </div>

            <div className="input-box">
              <FaUserGraduate className="input-icon" />
              <input
                type="number"
                placeholder="Attendance Percentage"
                name="Attendance_Percentage"
                onChange={handleChange}
              />
            </div>

            <div className="input-box">
              <FaBookOpen className="input-icon" />
              <input
                type="number"
                placeholder="Study Hours"
                name="Study_Hours"
                onChange={handleChange}
              />
            </div>

            <div className="input-box">
              <FaLaptop className="input-icon" />
              <input
                type="number"
                placeholder="Social Media Usage"
                name="Social_Media_Usage_Hours"
                onChange={handleChange}
              />
            </div>

            <div className="input-box full-width">
              <FaFire className="input-icon" />
              <input
                type="number"
                placeholder="Burnout Score"
                name="Burnout_Score"
                onChange={handleChange}
              />
            </div>

          </div>

          <button
            className="predict-btn"
            onClick={handleSubmit}
          >
            {
              loading
                ?
                "Analyzing..."
                :
                "Predict Stress Level"
            }
          </button>

          {
            prediction && (

              <motion.div
                className="result-card"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >

                <h3>Prediction Result</h3>

                <div className="prediction-circle">

                  <h1>{prediction}</h1>

                </div>

                <p>
                  AI model analyzed the student's behavior
                  and predicted the stress category.
                </p>

              </motion.div>
            )
          }

        </div>

      </motion.div>

    </div>
  );
}

export default Home;
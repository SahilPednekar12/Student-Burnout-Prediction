# 🎓 Student Burnout Prediction System

A full-stack Machine Learning application that predicts student stress levels using academic and lifestyle factors. The project uses a Random Forest Classifier trained with Scikit-Learn, deployed through a Flask REST API, and integrated with a modern React.js frontend for real-time predictions.

---

## 🚀 Features

- Machine Learning-based stress prediction
- Full-stack architecture using React and Flask
- Real-time prediction system
- Modern and responsive dashboard UI
- Random Forest Classification Model
- REST API integration
- Trained model deployment using Pickle (.pkl)
- Interactive user experience

---

## 📊 Input Parameters

The model predicts student stress levels using the following factors:

| Feature | Description |
|----------|------------|
| Sleep Hours | Average daily sleep hours |
| Assignment Count | Number of assignments |
| Screen Time Hours | Daily screen usage |
| Attendance Percentage | Student attendance percentage |
| Study Hours | Daily study duration |
| Social Media Usage Hours | Daily social media usage |
| Burnout Score | Overall burnout score |

---

## 🧠 Machine Learning Workflow

```text
Dataset
   ↓
Data Preprocessing
   ↓
Train/Test Split
   ↓
Random Forest Classifier
   ↓
Model Evaluation
   ↓
Model Saved (.pkl)
   ↓
Flask REST API
   ↓
React Frontend
```

---

## 🏗️ Project Structure

```text
student-burnout-predictor/
│
├── backend/
│   ├── app.py
│   ├── train_model.py
│   ├── burnout_model.pkl
│   ├── label_encoder.pkl
│   ├── burnout_dataset.csv
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   └── Home.js
│   │   ├── styles/
│   │   │   └── Home.css
│   │   ├── App.js
│   │   └── index.js
│   │
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

---

## 🛠️ Technologies Used

### Frontend

- React.js
- CSS3
- Axios
- Framer Motion
- React Icons

### Backend

- Flask
- Flask-CORS

### Machine Learning

- Scikit-Learn
- Pandas
- NumPy
- Joblib

---

## 🎯 Model Information

| Property | Value |
|-----------|---------|
| Algorithm | Random Forest Classifier |
| Type | Supervised Machine Learning |
| Problem Type | Multi-Class Classification |
| Target Variable | Stress Level |
| Output Classes | Low, Medium, High |
| Deployment | Flask REST API |

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/SahilPednekar12/student-burnout-predictor.git

cd student-burnout-predictor
```

Replace:

```text
YOUR_USERNAME
```

with your GitHub username.

---

## 🔧 Backend Setup

Move to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
pip install flask flask-cors pandas numpy scikit-learn joblib
```

Train the model:

```bash
python train_model.py
```

Run Flask server:

```bash
python app.py
```

Backend runs on:

```text
http://127.0.0.1:5000
```

---

## 💻 Frontend Setup

Move to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run React application:

```bash
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

## 🔌 API Endpoint

### Predict Student Stress Level

**POST**

```http
/predict
```

### Request Body

```json
{
  "Sleep_Hours": 7,
  "Assignment_Count": 5,
  "Screen_Time_Hours": 6,
  "Attendance_Percentage": 85,
  "Study_Hours": 4,
  "Social_Media_Usage_Hours": 3,
  "Burnout_Score": 60
}
```

### Response

```json
{
  "prediction": "Medium"
}
```

---

## 📈 Use Cases

- Student Wellness Monitoring
- Academic Performance Analysis
- Burnout Risk Assessment
- Educational Analytics
- Student Support Systems
- Research Projects in Machine Learning

---

## 📸 Screenshots

### Dashboard

Add your dashboard screenshot here:

```text
screenshots/dashboard.png
```

### Prediction Result

Add your prediction screenshot here:

```text
screenshots/prediction-result.png
```

---

## 🔮 Future Enhancements

- User Authentication
- Prediction History Tracking
- PDF Report Generation
- Interactive Data Visualizations
- Personalized Stress Management Recommendations
- Cloud Deployment
- Admin Dashboard

---

## 👨‍💻 Author

**Sahil Pednekar**

Machine Learning | React.js | Flask | Full Stack Development

---

## ⭐ Support

If you found this project useful:

- ⭐ Star the repository
- 🍴 Fork the repository
- 📢 Share the project

---

## 📜 License

This project is licensed under the MIT License.

Feel free to use and modify it for learning and educational purposes.

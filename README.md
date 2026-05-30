# 🎓 Student Burnout Prediction System

An AI-powered Machine Learning web application that predicts student stress levels based on academic and lifestyle factors.

Built using **React.js**, **Flask**, and **Scikit-Learn**.

---

## 🚀 Features

- Predict student stress levels using Machine Learning
- Modern React Frontend UI
- Flask REST API Backend
- Random Forest Classifier
- Real-time predictions
- Responsive Design
- Interactive Dashboard
- Trained ML Model (.pkl)

---

## 📊 Input Parameters

The model predicts stress level using:

| Feature | Description |
|----------|------------|
| Sleep Hours | Average daily sleep hours |
| Assignment Count | Number of assignments |
| Screen Time Hours | Daily screen usage |
| Attendance Percentage | Student attendance |
| Study Hours | Daily study time |
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
Flask API
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
│   └── burnout_dataset.csv
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
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

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/SahilPednekar12/student-burnout-predictor.git

cd student-burnout-predictor
```

---

### Backend Setup

```bash
cd backend

pip install flask flask-cors pandas numpy scikit-learn joblib

python train_model.py
```

Run Backend:

```bash
python app.py
```

Backend will run on:

```text
http://127.0.0.1:5000
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm start
```

Frontend will run on:

```text
http://localhost:3000
```

---

## 🔌 API Endpoint

### Predict Stress Level

```http
POST /predict
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

## 🎯 Model Information

| Algorithm | Random Forest Classifier |
|------------|------------------------|
| Problem Type | Multi-Class Classification |
| Target Variable | Stress Level |
| Output Classes | Low, Medium, High |

---

## 📸 Screenshots

### Dashboard

Add your UI screenshot here

```text
screenshots/dashboard.png
```

### Prediction Result

Add prediction result screenshot here

```text
screenshots/result.png
```

---

## 🔮 Future Enhancements

- User Authentication
- Prediction History
- PDF Report Generation
- Data Visualization Dashboard
- AI-Based Recommendations
- Cloud Deployment

---

## 👨‍💻 Author

**CodeKing**

Machine Learning | React | Flask | Full Stack Development

---

## ⭐ Support

If you found this project useful:

⭐ Star the repository

🍴 Fork the repository

📢 Share with others

---

## 📜 License

This project is licensed under the MIT License.

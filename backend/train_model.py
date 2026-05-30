import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score
import joblib

# =========================
# LOAD DATASET
# =========================

df = pd.read_csv("burnout_dataset.csv")

print("\nDataset Loaded Successfully\n")
print(df.head())

# =========================
# DROP UNNECESSARY COLUMN
# =========================

df.drop("Student_ID", axis=1, inplace=True)

# =========================
# ENCODE TARGET COLUMN
# =========================

label_encoder = LabelEncoder()

df["Stress_Level"] = label_encoder.fit_transform(df["Stress_Level"])

# =========================
# FEATURES & TARGET
# =========================

X = df.drop("Stress_Level", axis=1)

y = df["Stress_Level"]

# =========================
# TRAIN TEST SPLIT
# =========================

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# =========================
# TRAIN MODEL
# =========================

model = RandomForestClassifier(
    n_estimators=200,
    random_state=42
)

model.fit(X_train, y_train)

# =========================
# PREDICTIONS
# =========================

y_pred = model.predict(X_test)

# =========================
# ACCURACY
# =========================

accuracy = accuracy_score(y_test, y_pred)

print(f"\nModel Accuracy: {accuracy * 100:.2f}%")

# =========================
# SAVE MODEL
# =========================

joblib.dump(model, "burnout_model.pkl")

joblib.dump(label_encoder, "label_encoder.pkl")

print("\nModel Saved Successfully")
print("burnout_model.pkl created")
print("label_encoder.pkl created")
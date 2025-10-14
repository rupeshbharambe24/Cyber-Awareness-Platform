---

# 🛡️ Cyber Secure – Cybersecurity Awareness Portal

A modern, interactive web portal designed to promote **cybersecurity awareness** among students, employees, and general internet users.
The platform provides **educational articles**, **interactive quizzes**, **reporting guides**, and **personal safety tips**, all through a clean and responsive UI.

---

## 🚀 Features

### 👩‍💻 General Users

* Browse and read articles on cybersecurity topics.
* Learn safe online practices and digital hygiene tips.
* Attempt quizzes to test awareness and track progress.
* Access simple reporting guidance for cyber incidents.

### 🔐 Authentication

* Register and login with email/password.
* JWT-based authentication using FastAPI backend.
* Secure password hashing and token expiry management.
* Protected dashboard for user quiz history.

### 📊 Dashboard

* Displays user’s quiz results, score history, and improvement trends.
* Fetches authenticated data via secure API calls.

---

## 🧱 Tech Stack

| Layer                  | Technology                                          |
| ---------------------- | --------------------------------------------------- |
| **Frontend**           | React (TypeScript) + Vite + TailwindCSS + Shadcn UI |
| **Backend**            | FastAPI (Python)                                    |
| **Database**           | SQLite (local lightweight DB)                       |
| **Auth**               | JWT Authentication (PyJWT)                          |
| **Hosting (Optional)** | Render / Railway / PythonAnywhere / Vercel          |
| **Dev Tools**          | Node.js, Python 3.10+, SQLite3                      |

---

## 📁 Folder Structure

```
CyberSecure/
│
├── frontend/                 # React (Vite) frontend
│   ├── src/
│   │   ├── pages/            # Home, Learn, Quiz, Login, Dashboard, etc.
│   │   ├── components/       # Navbar, Footer, InfoCard, etc.
│   │   ├── contexts/         # AuthContext for JWT handling
│   │   ├── hooks/            # use-toast, use-mobile
│   │   ├── lib/              # Utility functions
│   │   └── assets/           # Images and icons
│   └── package.json
│
├── backend/                  # FastAPI backend
│   ├── main.py               # App entry point
│   ├── models.py             # SQLAlchemy models
│   ├── schemas.py            # Pydantic schemas
│   ├── database.py           # SQLite connection setup
│   ├── auth.py               # JWT utilities and security functions
│   ├── routes/               # API endpoints: users, articles, quizzes, scores
│   ├── seed_data.py          # Initial 20 articles + 20 quizzes
│   └── requirements.txt
│
└── README.md
```

---

## ⚙️ Installation and Setup Guide

### 🧩 Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/) (v18 or later)
* [Python 3.10+](https://www.python.org/downloads/)
* [Git](https://git-scm.com/)
* [pip](https://pip.pypa.io/en/stable/)

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/cyber-secure.git
cd cyber-secure
```

---

### 2️⃣ Setup the Backend (FastAPI)

```bash
cd backend
python -m venv venv
source venv/bin/activate        # (on Windows: venv\Scripts\activate)
pip install -r requirements.txt
```

#### 🔧 Create the SQLite Database and Seed Data

```bash
python seed_data.py
```

This will automatically create:

* `cybersecure.db`
* Default tables (users, articles, quizzes, scores)
* 20 preloaded articles & 20 quizzes.

#### ▶️ Run the Backend Server

```bash
uvicorn main:app --reload
```

✅ **Backend runs on:** `http://localhost:8000`

---

### 3️⃣ Setup the Frontend (React)

```bash
cd ../frontend
npm install
npm run dev
```

✅ **Frontend runs on:** `http://localhost:5173`

> The frontend already points to the backend at `http://localhost:8000`.
> If you deploy the backend elsewhere, just update the `API_BASE_URL` in frontend `.env` or inside the API service files.

---

## 🧠 Key API Endpoints

| Method | Endpoint            | Description                               |
| ------ | ------------------- | ----------------------------------------- |
| `POST` | `/register`         | Register a new user                       |
| `POST` | `/login`            | Authenticate user and receive JWT         |
| `GET`  | `/articles`         | Fetch all articles                        |
| `GET`  | `/articles/{id}`    | Fetch full article by ID                  |
| `GET`  | `/quizzes`          | Get a random quiz                         |
| `POST` | `/submit_quiz`      | Submit quiz results (Auth required)       |
| `GET`  | `/scores/{user_id}` | Fetch user’s quiz history (Auth required) |

---

## 🔒 Authentication Flow

1. On successful login, backend returns a **JWT**:

   ```json
   { "token": "<jwt_token>" }
   ```
2. Frontend stores it in `localStorage` under `auth_token`.
3. Protected routes automatically attach:

   ```
   Authorization: Bearer <token>
   ```
4. If token is expired or invalid → frontend logs user out.

---

## 🧰 Developer Commands

### 🔁 Rebuild database and reseed

```bash
rm cybersecure.db
python seed_data.py
```

### 🧹 Format and Lint

Frontend:

```bash
npm run lint
```

Backend:

```bash
black .
isort .
```

---

## 🌍 Deployment Notes

### Frontend

Deploy to **Vercel** or **Netlify** — ensure backend API URL is configured properly in `.env` file:

```
VITE_API_BASE_URL=https://your-backend-host.com
```

### Backend

Deploy to **Render**, **Railway**, or **PythonAnywhere**:

```bash
uvicorn main:app --host 0.0.0.0 --port 8000
```

Make sure to:

* Enable CORS for your frontend domain.
* Set environment variable `SECRET_KEY` for JWT.

---

## 📚 Example User Flow

1. **Open portal** → lands on Home page.
2. Click **Learn** → browse articles (GET `/articles`).
3. Click article → full detail opens (GET `/articles/:id`).
4. Visit **Quiz** → attempt 5–6 questions (GET `/quizzes`).
5. Submit results → saved securely (POST `/submit_quiz`).
6. Login → access **Dashboard** → view all previous quiz scores (GET `/scores/:user_id`).

---

## 📦 Future Enhancements

* Admin panel to add/edit articles & quizzes.
* Social login (Google / GitHub).
* Leaderboard system for top scorers.
* Multi-language support.
* AI-based adaptive quiz generation.

---

## 🧑‍💻 Contributors

| Name             | Role                            |
| ---------------- | ------------------------------- |
| Rupesh Bharambe  | Project Lead & Developer        |
| —                | —                               |
| ChatGPT (OpenAI) | Code and architecture assistant |

---

## 🪪 License

This project is licensed under the **MIT License** — free for educational and non-commercial use.

---

### 💡 “Awareness is the first line of defense — stay cyber secure!”

---


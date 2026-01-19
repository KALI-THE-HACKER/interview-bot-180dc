# Interview Bot - Full Stack Application

An AI-powered interview preparation platform with resume building, interview question generation, and interactive practice features.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **Python** (v3.11 or higher) - [Download](https://www.python.org/)

## 🛠️ Development Environment Setup

### 1. Clone the Repository

```bash
git clone https://github.com/KALI-THE-HACKER/interview-bot-180dc.git
cd interview-bot-180dc
```

### 2. Environment Variables Setup

Copy the `.env.example` file to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

### 3. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create a virtual environment
python3 -m venv myenv

# Activate the virtual environment
# On macOS/Linux:
source myenv/bin/activate
# On Windows:
# myenv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Return to root directory
cd ..
```

### 4. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Return to root directory
cd ..
```

### 5. Running the Application (Development Mode Only)

**Terminal 1 - Backend:**
```bash
cd backend
source myenv/bin/activate  # Activate virtual environment
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:8000`
- API Docs: `http://localhost:8000/docs`

```

## 📁 Project Structure

```
Interview-bot-180dc/
├── backend/                 # FastAPI backend
│   ├── Agents/             # AI agent implementations
│   ├── api/                # API routes
│   │   ├── interview/      # Interview endpoints
│   │   ├── resume/         # Resume builder endpoints
│   │   └── cheatsheet/     # Cheatsheet endpoints
│   ├── utils/              # Utility functions
│   ├── main.py             # FastAPI application entry point
│   └── requirements.txt    # Python dependencies
├── frontend/               # React + Vite frontend
│   ├── src/
│   │   ├── pages/          # Page components
│   │   ├── components/     # Reusable components
│   │   ├── auth/           # Auth0 configuration
│   │   └── utils/          # Frontend utilities
│   └── package.json        # Node dependencies
├── nginx/                  # Nginx configuration (for Docker)
├── docker-compose.yml      # Docker compose configuration
└── .env                    # Environment variables (not in git)
```
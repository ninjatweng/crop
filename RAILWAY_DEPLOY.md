# CropAid Railway Deployment Guide

## Project Structure

This project is designed to deploy as **two separate services** on Railway:

1. **Frontend** - React/Vite static app served by nginx
2. **Backend** - Node.js/Express API server

---

## Deployment Steps

### 1. Create Railway Project

1. Go to [Railway](https://railway.app)
2. Create a new project
3. Connect your GitHub repo: `ninjatweng/crop`

### 2. Deploy Backend Service

1. Click **"New Service"** → **"GitHub Repo"**
2. Select the `crop` repo
3. In **Settings**:
   - **Name**: `cropaid-api`
   - **Root Directory**: Leave empty
   - **Dockerfile Path**: `Dockerfile.backend`
4. Add **Environment Variables**:
   ```
   JWT_SECRET=your-secure-secret-key
   DATABASE_URL=mysql://user:pass@host:port/database
   FRONTEND_URL=https://your-frontend-url.railway.app
   PORT=3000
   ```
5. Generate a **public domain** (Settings → Networking → Generate Domain)

### 3. Deploy Frontend Service

1. Click **"New Service"** → **"GitHub Repo"**
2. Select the same `crop` repo
3. In **Settings**:
   - **Name**: `cropaid-web`
   - **Root Directory**: Leave empty
   - **Dockerfile Path**: `Dockerfile.frontend`
4. Add **Build Arguments** (in Settings → Build):
   ```
   VITE_API_URL=https://your-backend-url.railway.app/api
   ```
5. Generate a **public domain**

### 4. Add MySQL Database

1. Click **"New Service"** → **"Database"** → **"MySQL"**
2. Copy the `DATABASE_URL` from the MySQL service
3. Paste it into the Backend service's environment variables

---

## Environment Variables Summary

### Backend (`cropaid-api`)
| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | MySQL connection string (from Railway MySQL) |
| `JWT_SECRET` | Secret key for JWT tokens |
| `FRONTEND_URL` | URL of the frontend service (for CORS) |
| `PORT` | Server port (default: 3000) |

### Frontend (`cropaid-web`)
| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Full URL to backend API (e.g., `https://api.railway.app/api`) |

---

## Local Development

### Run Backend
```bash
cd server
npm install
npm run dev
```

### Run Frontend
```bash
npm install
npm run dev
```

### Environment Files

Create `server/.env`:
```env
DATABASE_URL=mysql://root:password@localhost:3306/cropaid
JWT_SECRET=development-secret
FRONTEND_URL=http://localhost:5173
```

Create `.env`:
```env
VITE_API_URL=http://localhost:3000/api
```

---

## Database Setup

Run these SQL files on your MySQL database:
1. `server/schema.sql` - Creates tables
2. `server/seed.sql` - Adds initial data (admin user, barangays, etc.)

**Admin Login:**
- Username: `admin`
- Password: `admin123`

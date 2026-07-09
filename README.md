# Expense Manager Pro - Frontend

A modern Expense Tracking Web Application built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Axios**.

The frontend communicates with the FastAPI backend to provide a responsive and user-friendly expense management experience.

---

# Features

- Secure Login
- User Registration
- JWT Authentication
- Dashboard
- Expense Management
- Category Management
- Analytics
- Reports
- Responsive Design
- Protected Routes

---

# Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Axios
- React Router DOM
- Lucide React

---

# Folder Structure

```
src/
│
├── api/
├── assets/
├── components/
├── context/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── services/
├── styles/
├── types/
├── utils/
│
├── App.tsx
├── main.tsx
└── index.css
```

---

# Pages

- Login
- Register
- Dashboard
- Expenses
- Categories
- Analytics
- Profile

---

# Features

## Authentication

- Login
- Registration
- JWT Token Storage
- Protected Routes

---

## Dashboard

Displays

- Total Expenses
- Monthly Expenses
- Weekly Expenses
- Today's Expenses
- Highest Expense
- Categories Summary

---

## Expenses

- View Expenses
- Add Expense
- Edit Expense
- Delete Expense

---

## Categories

- Create Category
- Update Category
- Delete Category

---

## Analytics

- Monthly Statistics
- Category Breakdown
- Expense Charts

---

# Installation

Clone repository

```bash
git clone https://github.com/yourusername/expense-manager-frontend.git
```

Move inside project

```bash
cd expense-manager-frontend
```

Install packages

```bash
npm install
```

---

# Environment Variables

Create `.env`

```
VITE_API_URL=http://127.0.0.1:8000
```

---

# Run Project

```bash
npm run dev
```

Application

```
http://localhost:5173
```

---

# Build

```bash
npm run build
```

Preview

```bash
npm run preview
```

---

# Backend Connection

The frontend communicates with the FastAPI backend using Axios.

Example

```
POST /auth/login
POST /auth/register

GET /dashboard

GET /expenses
POST /expenses

GET /categories
POST /categories

GET /analytics

GET /reports
```

---

# Authentication

JWT token is stored in Local Storage.

Every authenticated request automatically includes:

```
Authorization: Bearer <access_token>
```

using Axios Interceptors.

---

# Future Improvements

- Dark Mode
- Notifications
---

# Author

Syeda Sidra Sherazi

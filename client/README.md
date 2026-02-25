# CipherSQLStudio Frontend 🎨

## Overview

The frontend of CipherSQLStudio is a React-based, browser-first SQL practice interface. It provides students with an intuitive environment to read assignments, write SQL queries, execute them in real time, and request intelligent hints.

The UI is built with React and styled using modular SCSS with a mobile-first responsive approach.

---

## Tech Stack

- React.js
- SCSS (modular architecture with partials, mixins, variables)
- Monaco Editor (SQL editor)
- Axios (API communication)
- Responsive layout (320px → 1281px)

---

## Core UI Components

- Assignment Listing Page
- Question Panel
- Sample Data Viewer
- SQL Editor (Monaco)
- Results Panel
- LLM Hint Panel

---

## Folder Structure

src/
│
├── components/

├── pages/
    will contain AssignmentAttempt and AssignmentList Page

├── services/backend
    will have the api service for 

├── styles/
  
│ ├── base/
│     Base styling

├── components/
    all the components is defined here

│ └── main.scss
      global styling of the app is here

├── App.jsx
    main app.jsx where all components will come here

└── main.jsx

## Environment Variables
Create a `.env` file in the frontend root:
VITE_API_BASE_URL=http://localhost:5000/api

---
## Running the Frontend
```bash
npm install
npm run dev
```
## Open in browser :
http://localhost:5173

## Frontend Responsibilities
1) Render assignments
2) Manage local state
3) Send SQL queries to backend
4) Display structured results
5) Display LLM hints



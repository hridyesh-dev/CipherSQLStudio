
# 🔐 CipherSQLStudio – Backend

Backend service for CipherSQLStudio built with Express.js, providing secure SQL execution, assignment management, and AI-powered hints.

## 📌 Overview

The backend is responsible for:

📚 Assignment retrieval

🛡️ Secure (sandboxed) SQL query execution

🤖 LLM-powered hint generation

🗄️ Integration with MongoDB (assignments) and PostgreSQL (query execution)

This service ensures safe database interaction while supporting an interactive SQL learning experience.
---


## 🏗️ Tech Stack

Node.js

Express.js

MongoDB – Assignment storage

PostgreSQL – SQL execution engine

LLM API – Hint generation

Middleware-based security validation

## 🗄️ Database Architecture
MongoDB

Stores:
Assignments
Problem descriptions
Metadata (difficulty, tags, etc.)

PostgreSQL
Used exclusively for:
SQL query execution
Pre-seeded datasets for assignments
Controlled read-only access

## 📂 Project Structure

backend/
│

│

├── models/

│   └── Assignment.js
│
├── routes/

│   ├── assignmentRoutes.js
        GET /api/assignments
        Returns all assignments.

│   ├── executionRoutes.js
        POST /api/execute
        Executes a SQL query securely (SELECt only).

│   └── hintRoutes.js
      POST /api/hint
      Generates an AI-powered hint based on the question and user's query.
│
├── config/

│   ├── db.js

│   └── postgres.js
│
├── server.js

└── package.json

## 🔐 Security

Security is a core focus of CipherSQLStudio.

✅ Query Restrictions

Only SELECT statements allowed

No INSERT, UPDATE, DELETE, DROP, ALTER, etc.

Restricted keyword validation

Semicolon enforcement and injection prevention

✅ SQL Validation Middleware

Checks query type

Filters dangerous keywords

Sanitizes input before execution

✅ Sandboxed Execution

Queries run against a restricted PostgreSQL instance

No schema modification privileges

Limited database permissions
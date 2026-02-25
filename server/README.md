
# Backend - CipherSQLStudio

## Overview

Express.js backend handling:

- Assignment retrieval
- SQL execution (sandboxed)
- LLM hint generation
- MongoDB + PostgreSQL integration

---

## API Endpoints

### GET /api/assignments
Returns all assignments.

### GET /api/assignments/:id
Returns single assignment.

### POST /api/execute
Executes SQL query.

Body:
{
  "query": "SELECT * FROM users;"
}

### POST /api/hint
Generates hint.

Body:
{
  "question": "...",
  "query": "SELECT ..."
}

---

## Security

- Only SELECT queries allowed
- Restricted keyword validation
- Error handling middleware

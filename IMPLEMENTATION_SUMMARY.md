# Week 2 Node Express API - Implementation Summary

## ✅ All Requirements Completed

### 1. **Core Endpoints**

#### GET /
- **Response**: "My Week 2 API!"
- **Status**: ✅ Implemented in `index.js`

#### POST /user
- **Accepts**: `fname` and `email` in JSON body
- **Response**: "Hello, [fname]!"
- **Error Handling**: Returns 400 with error message if `fname` or `email` is missing
- **Status**: ✅ Implemented in `routes/user.js`

#### GET /user/:id
- **Response**: "User [id] profile"
- **Status**: ✅ Implemented in `routes/user.js`

### 2. **Features Implemented**

#### JSON Parsing
- ✅ `express.json()` middleware added in `index.js`
- Automatically parses incoming JSON requests

#### Error Handling
- ✅ 400 status code for missing `fname` or `email` in POST /user
- ✅ 404 error handling for undefined routes
- Error responses in JSON format

#### Environment Variables
- ✅ `.env` file created with `PORT=3000`
- ✅ `dotenv` package installed and configured
- ✅ `require('dotenv').config()` at the start of `index.js`
- PORT can be overridden via environment variable

#### Static HTML
- ✅ Static file serving via `express.static()`
- ✅ `public/index.html` served at root path "/"
- File contains: "Welcome to My Week 2 API!"

### 3. **Custom Middleware**

#### Request Logger
- **File**: `middleware/logger.js`
- **Features**:
  - Logs HTTP method and URL
  - Includes ISO timestamp for each request
  - Format: `[2025-11-15T10:30:45.123Z] GET /user/123`
- ✅ Applied globally to all requests

### 4. **Project Structure**

```
c:\Users\HP\Desktop\New folder\
├── index.js                 # Main Express app
├── .env                     # Environment variables
├── .gitignore              # Git ignore file
├── package.json            # Dependencies and scripts
├── package-lock.json       # Locked dependency versions
├── middleware/
│   └── logger.js           # Custom logging middleware
├── routes/
│   └── user.js             # User routes (POST and GET/:id)
├── public/
│   └── index.html          # Static HTML page
└── test-api.js             # API test file
```

### 5. **Dependencies**

```json
{
  "dependencies": {
    "dotenv": "^16.4.5",
    "express": "^5.1.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.11"
  }
}
```

### 6. **NPM Scripts**

- `npm start` - Run the server (production)
- `npm run dev` - Run the server with nodemon (development with auto-reload)
- `npm test` - Test script placeholder

### 7. **Version Control**

#### Git Repository
- ✅ Repository initialized: `newproject`
- ✅ Remote: `https://github.com/Darynjoseph/newproject.git`
- ✅ Current Branch: `week2-node-express`
- ✅ All files committed with message: "Week 2 Node Express API - Add routes, middleware, error handling, and .env config"

#### .gitignore
- Excludes: `node_modules/`, `.env`, `.DS_Store`, `*.log`, `npm-debug.log*`

### 8. **Testing Instructions**

#### Using curl (command line):

```bash
# Test GET /
curl http://localhost:3000/

# Test POST /user with valid data
curl -X POST http://localhost:3000/user \
  -H "Content-Type: application/json" \
  -d "{\"fname\": \"John\", \"email\": \"john@example.com\"}"

# Test POST /user with missing email (should return 400)
curl -X POST http://localhost:3000/user \
  -H "Content-Type: application/json" \
  -d "{\"fname\": \"John\"}"

# Test GET /user/:id
curl http://localhost:3000/user/123
```

#### Using Postman:

1. **GET /** → Response: "My Week 2 API!"
2. **POST /user** → Body: `{"fname": "John", "email": "john@example.com"}` → Response: "Hello, John!"
3. **POST /user (missing email)** → Body: `{"fname": "John"}` → Response: 400 error
4. **GET /user/123** → Response: "User 123 profile"

### 9. **How to Run**

```bash
# Install dependencies
npm install

# Start the server
npm start

# For development with auto-reload
npm run dev

# Server will run on: http://localhost:3000
```

### 10. **GitHub Push**

```bash
# Already completed!
git push -u origin week2-node-express
```

Visit: https://github.com/Darynjoseph/newproject/tree/week2-node-express

---

## 🎯 Summary

All requirements have been successfully implemented:
- ✅ Core API endpoints (GET /, POST /user, GET /user/:id)
- ✅ JSON parsing with error handling (400 for missing data)
- ✅ Environment configuration via .env
- ✅ Static HTML file serving
- ✅ Custom middleware for logging requests with timestamps
- ✅ Git initialization and push to GitHub (week2-node-express branch)
- ✅ Comprehensive .gitignore for production readiness

The API is ready for testing with curl or Postman!

# node-mongodb-crud

## Description
A simple CRUD application using Node.js and MongoDB. This app allows you to create, read, update, and delete user records.

## What's Built
- User model with Mongoose
- RESTful API for CRUD operations
- Basic error handling

## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/node-mongodb-crud.git
   cd node-mongodb-crud
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```
4. Open your browser and navigate to `http://localhost:3000`

## API Documentation
- **GET /users**: Retrieve all users
- **POST /users**: Create a new user
- **PUT /users/:id**: Update a user by ID
- **DELETE /users/:id**: Delete a user by ID

## Environment Variables
- `MONGODB_URI`: MongoDB connection string

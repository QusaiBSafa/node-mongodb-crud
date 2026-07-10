# Infrastructure Overview
This application uses Node.js with Express and MongoDB to handle user data.

## Data Models
- **User**: Represents a user with fields `name`, `email`, and `age`.

## API Design
- **GET /users**: Fetch all users.
- **POST /users**: Add a new user.
- **PUT /users/:id**: Modify an existing user.
- **DELETE /users/:id**: Remove a user.

## Key Decisions
- Using Mongoose for MongoDB interactions.
- Structuring the app with a clear separation of concerns.
# Accountability Booster

The Accountability Booster is a Node.js application built with Express.js and Sequelize, designed to manage tasks and users for your project. This README provides an overview of the project structure, installation instructions, and usage guidelines.

## Features

- CRUD (Create, Read, Update, Delete) operations for tasks.
- User management with task assignments and scoring.
- Category management for tasks.
- Soft deletion for tasks and categories.

## Project Structure

The project follows a structured layout:

```plaintext
/accountability-booster
├── client
├── server
│   ├── src
│   │   ├── config
│   │   │   └── config.json
│   │   ├── models
│   │   │   ├── task.js
│   │   │   ├── user.js
│   │   │   └── category.js
│   │   ├── routes
│   │   │   ├── task.js
│   │   │   ├── user.js
│   │   │   └── category.js
│   │   ├── app.js
├── package.json
├── node_modules
└── ...
```

- `src/config`: Contains database configuration files.
- `src/models`: Defines Sequelize models for tasks, users, and categories.
- `src/routes`: Contains Express.js route handlers for CRUD operations.
- `src/app.js`: The main application file, where the Express app is set up.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/task-manager-api.git
   ```

2. Install dependencies:

   ```bash
   cd task-manager-api
   npm install
   ```

3. Configure the database connection in `src/config/database.js`.

4. Run migrations to set up the database schema:

   ```bash
   npx sequelize-cli db:migrate
   ```

5. Start the application:

   ```bash
   npm start
   ```

## Usage

### Tasks

- Create a new task:

  ```bash
  POST http://localhost:3000/tasks
  ```

- Retrieve all tasks:

  ```bash
  GET http://localhost:3000/tasks
  ```

- Retrieve a task by ID:

  ```bash
  GET http://localhost:3000/tasks/:id
  ```

- Update a task by ID:

  ```bash
  PUT http://localhost:3000/tasks/:id
  ```

- Delete a task by ID:

  ```bash
  DELETE http://localhost:3000/tasks/:id
  ```

### Users

- Create a new user:

  ```bash
  POST http://localhost:3000/users
  ```

- Retrieve all users:

  ```bash
  GET http://localhost:3000/users
  ```

- Retrieve a user by ID:

  ```bash
  GET http://localhost:3000/users/:id
  ```

- Update a user by ID:

  ```bash
  PUT http://localhost:3000/users/:id
  ```

- Delete a user by ID:

  ```bash
  DELETE http://localhost:3000/users/:id
  ```

### Categories

- Create a new category:

  ```bash
  POST http://localhost:3000/categories
  ```

- Retrieve all categories:

  ```bash
  GET http://localhost:3000/categories
  ```

- Retrieve a category by ID:

  ```bash
  GET http://localhost:3000/categories/:id
  ```

- Update a category by ID:

  ```bash
  PUT http://localhost:3000/categories/:id
  ```

- Delete a category by ID:

  ```bash
  DELETE http://localhost:3000/categories/:id
  ```

## Contributing

Contributions to this project are welcome! Feel free to open issues and pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
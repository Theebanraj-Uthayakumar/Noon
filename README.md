# NOON Project

## Overview

This project, named **NOON**, is built with [Next.js](https://nextjs.org/), a React framework. It includes client-side rendering, a custom API server, and utilizes styled-components for styling.

## Folder Structure

- **`public/`**: Public assets like images, fonts, and static files.
- **`server/`**: Contains server-side code for handling custom API routes and server logic.
- **`src/`**: Primary source code for the application.

## Configuration Files

- **`.babelrc`**: Babel configuration file for transpiling JavaScript code.
- **`.env`**: Environment variables for the project (not included in version control for security).
- **`.eslintrc.json`**: ESLint configuration file for code linting.
- **`.gitignore`**: Specifies which files and directories should be ignored by Git.
- **`next.config.mjs`**: Configuration file for customizing the Next.js setup.
- **`nodemon.json`**: Configuration for Nodemon, a tool for automatically restarting the server on file changes.
- **`package.json`**: Contains project metadata and dependency information.
- **`postcss.config.mjs`**: Configuration file for PostCSS, a tool for transforming CSS with JavaScript plugins.
- **`tailwind.config.ts`**: Configuration file for Tailwind CSS.
- **`tsconfig.json`**: TypeScript configuration file for the project.
- **`tsconfig.next.json`**: TypeScript configuration specific to the Next.js application.
- **`tsconfig.server.json`**: TypeScript configuration specific to the server-side code.

## Setup and Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Theebanraj-Uthayakumar/Noon.git
   cd noon
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Environment Variables:**

   Create a `.env` file in the root directory and add your environment variables. 
   ```
    MONGO_URI=mongodb+srv://theebanrajuthayakumar10:D6BE7aB8d6Grrxwz@cluster0.wnbef.mongodb.net/noon?retryWrites=true&w=majority
    PORT=8000
    BACKEND_API_BASE_URL=http://localhost:8000
   ```

4. **Development:**

   Start the development server:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000` and backend will be available at `http://localhost:8000`.

## Key Features

- **Next.js**: React framework with server-side rendering and static site generation.
- **TypeScript**: Static type checking to reduce runtime errors.
- **styled-components**: A CSS-in-JS library for styling React components with encapsulated and dynamic styles.
- **Custom API Server**: Custom server logic under the `server/` directory.
- **Auto Restart**: Nodemon configuration for auto-restarting the server during development.
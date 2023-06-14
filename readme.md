# MERN Project Template

This is a project template for a MERN (MongoDB, Express.js, React, Node.js) stack application. It consists of two folders: `client` and `server`, containing the client-side and server-side code respectively.

## Client

The `client` folder contains a Vite React project with Tailwind CSS installed. This folder is responsible for the frontend of the application.

To install the required dependencies, navigate to the `client` folder and run:

```bash
npm install
```

To run the client in development mode, navigate to the `client` folder and run the following command:

```bash
npm run dev
```

To build the client for production, use the following command:

```bash
npm run build
```

## Server

The `server` folder contains an Express.js project with several dependencies including bcryptjs, dotenv, jsonwebtoken, mongoose, and nodemon. This folder is responsible for the backend of the application.

Before running the server, make sure to set up your environment variables. Create a `.env` file in the `server` folder and define the necessary variables such as database connection URI, JWT secret, etc.

The `.env` should contaon

```bash
PORT = 5000
TOKEN_SECRET =
DATABASE_URL =
```

To install the required dependencies, navigate to the `server` folder and run:

```bash
npm install
```

To run the server in development mode with nodemon for automatic restart on changes, use the following command:

```bash
npm run dev
```

To build the server for production, use the following command:

```bash
npm run build
```

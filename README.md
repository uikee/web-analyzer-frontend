# Web Analyzer App (React Frontend)

This is the frontend application for interacting with the web analyzer service. It allows users to input a URL, analyze the webpage, and display the results.

## Prerequisites

- Node.js 16 or later
- npm package manager
- `.env` file created in the project root

## Environment Variables

Create a `.env` file in the root directory with the following variable:

```
REACT_APP_API_BASE_URL=http://localhost:8081
```

This should match the port where the Go backend is running.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd web-analyzer-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the App

1. Start the development server:
   ```bash
   npm start
   ```

2. Open the app in your browser at `http://localhost:3000`.

## Features

- Input a URL and submit it for analysis.
- Display results including:
  - Page title
  - HTML version
  - Headings
  - Links (internal, external, inaccessible)
  - Presence of login forms

---

## Deployment

To build the app for production:
```bash
npm run build
```

The built files will be available in the `build` directory.

## Docker Build Steps

1. **Build the Docker image**:

   To build the Docker image for the React app, run the following command from the project root:
   ```bash
   docker build -t web-analyzer-frontend .
   ```

2. **Run the Docker container**:

   After the image is built, you can run the Docker container with this command:
   ```bash
   docker run -p 3000:3000 web-analyzer-frontend
   ```

   This will serve the app at `http://localhost:3000`.

## Notes

- Ensure the backend is running on the port specified in `REACT_APP_API_BASE_URL`.
- For production, update the backend URL if necessary.
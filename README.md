# Web Analyzer App (React Frontend)

This is the frontend application for interacting with the web analyzer service. It allows users to input a URL, analyze the webpage, and display the results.

## Prerequisites

- Node.js 16 or later
- Yarn package manager
- `.env` file created in the project root

## Environment Variables

Create a `.env` file in the root directory with the following variable:

```
REACT_APP_API_PORT=8081
```

This should match the port where the Go backend is running.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd web-analyzer-app
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

## Running the App

1. Start the development server:
   ```bash
   yarn start
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
yarn build
```

The built files will be available in the `build` directory.

## Notes

- Ensure the backend is running on the port specified in `REACT_APP_API_PORT`.
- For production, update the backend URL if necessary.
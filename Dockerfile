# Step 1: Build the React app
FROM node:16 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if present)
COPY web-analyzer-frontend/package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the project files
COPY web-analyzer-frontend/ .

# Build the React app for production
RUN npm run build

# Step 2: Serve the built React app using an Nginx container
FROM nginx:alpine

# Copy the build folder from the build stage to Nginx's public folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 3000
EXPOSE 3000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

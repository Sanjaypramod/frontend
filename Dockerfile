# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY ../package*.json /app/

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY src/ .

# Build the app
RUN npm run build

# Install a static file server
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 80

# Start the app
CMD ["serve", "-s", "build"]

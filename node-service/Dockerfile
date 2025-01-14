# Use an official Node.js image as the base
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first (if they exist)
COPY package.json ./
COPY package-lock.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port your Node.js app listens on (e.g., 3000)
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]

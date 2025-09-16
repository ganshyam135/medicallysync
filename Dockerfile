# Use Node.js 18 Alpine for smaller size
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (needed for build)
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Create database directory
RUN mkdir -p /app/data

# Expose port
EXPOSE 5000

# Set production environment
ENV NODE_ENV=production

# Start the app
CMD ["npm", "start"]

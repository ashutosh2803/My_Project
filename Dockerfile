FROM node:18-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

#  Install dependencies
RUN npm install

# Copy the entire application code to the container
COPY . .

# Expose port 8081 for the node server
EXPOSE 8081

CMD [ "npm", "start"]

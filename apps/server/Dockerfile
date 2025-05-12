#From official Node image
FROM node:22

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 8080

#Run our app
CMD ["node", "app.js"]
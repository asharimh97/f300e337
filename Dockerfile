FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json .
COPY package-lock.json .

RUN npm install

# Bundle app source

COPY . .

EXPOSE 3000

ENV PORT=3000
# set hostname to localhost
ENV HOSTNAME="0.0.0.0"

CMD ["npm", "run", "dev"]
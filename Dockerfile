FROM node:14.2.0

# set work directory
WORKDIR /usr/src/tmp

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

CMD npm start
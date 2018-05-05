FROM node:9 as preview
WORKDIR /fibre-app
COPY . /fibre-app
RUN npm install
RUN npm start

FROM node:9 as build
WORKDIR /fibre-app
COPY package.json /fibre-app
RUN npm install
COPY ./ /fibre-app
ARG env=prod
RUN npm run build -- --prod --environment $env

FROM node:9
WORKDIR /fibre-app
COPY package.json /fibre-app
RUN npm install
COPY ./ /fibre-app
ARG env=prod
RUN npm run build -- --prod --environment $env

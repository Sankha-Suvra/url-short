FROM node:20-alpine as development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


FROM node:20-alpine as production

WORKDIR /app

COPY package*.json ./
COPY --from=development /app/dist ./dist

RUN npm ci --only=production

EXPOSE 5001

CMD ["npm", "start"]
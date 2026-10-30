# Build Stage
#FROM node:20 AS build

#WORKDIR /app

#COPY package*.json ./

#RUN npm install

#COPY . .

#RUN npm run build

# Runtime Stage
#FROM nginx:alpine

#COPY nginx.conf /etc/nginx/conf.d/default.conf

#COPY --from=build /app/dist/student-app/browser/ /usr/share/nginx/html/

#EXPOSE 80



# Build stage
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Runtime stage
FROM nginx:1.27-alpine
COPY --from=build /app/dist/student-app/browser /usr/share/nginx/html
# or /app/dist/student-app  depending on your Angular version

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

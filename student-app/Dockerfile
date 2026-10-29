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



# Build Stage
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Runtime Stage
FROM nginx:alpine

# Copy custom nginx.conf to override main config
COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist/student-app/browser/ /usr/share/nginx/html/

# OpenShift requires non-root ports (> 1024)
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

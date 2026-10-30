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


# ---------- Build stage ----------
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---------- Runtime stage ----------
FROM nginx:1.27-alpine

# Remove default config
RUN rm -f /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy Angular build output
# (path adjust karo agar alag ho - common: dist/student-app/browser)
COPY --from=build /app/dist/student-app/browser /usr/share/nginx/html

# OpenShift runs as random UID → make necessary dirs writable
RUN chown -R 1001:0 /usr/share/nginx/html && \
    chmod -R g+w /usr/share/nginx/html && \
    chown -R 1001:0 /var/cache/nginx && \
    chmod -R g+w /var/cache/nginx && \
    chown -R 1001:0 /var/log/nginx && \
    chmod -R g+w /var/log/nginx && \
    chown -R 1001:0 /etc/nginx && \
    chmod -R g+w /etc/nginx && \
    # Create temp dirs that nginx needs
    mkdir -p /tmp/client_temp /tmp/proxy_temp /tmp/fastcgi_temp /tmp/uwsgi_temp /tmp/scgi_temp && \
    chown -R 1001:0 /tmp && \
    chmod -R g+w /tmp

# Run as non-root
USER 1001

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

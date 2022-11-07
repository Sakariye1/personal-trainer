FROM node:16-alpine as builder
ENV NODE_ENV production
# Set the working directory to /app inside the container
WORKDIR /app
#Cache and Install dependencies
COPY package.json .
COPY package-lock.json .

RUN npm install install --production
# Copy files
COPY . .
# Build the app
RUN npm run build

# nginx
FROM nginx:1.21.0-alpine  as production
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Add my nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
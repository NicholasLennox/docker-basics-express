# Install node
FROM node:23-slim
# Set a folder to copy into
WORKDIR /app
# Copy over everything from our directory to /app
COPY . .
# Install only production dependencies
RUN npm install --production
# Expose port 3000
EXPOSE 3000
# Set an environment variable
ENV NODE_ENV=production
# Define startup command
CMD ["node", "app"]
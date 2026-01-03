FROM node:22-alpine

WORKDIR /app

# Copy pre-built frontend
COPY dist ./dist

# Copy server files
COPY server ./server

# Install server dependencies
WORKDIR /app/server
RUN npm install --production

# Expose port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Start server
CMD ["node", "index.js"]

FROM node:22-alpine

WORKDIR /app

# Copy built files and dependencies
COPY dist /app/dist
COPY node_modules /app/node_modules

# Expose port
EXPOSE 3002

# Start server
CMD ["node", "dist/index.js"]

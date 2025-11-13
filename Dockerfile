FROM node:22-alpine

WORKDIR /app

# Copy built files
COPY dist /app/dist
COPY package.json /app/
COPY pnpm-lock.yaml /app/

# Install production dependencies
RUN npm install -g pnpm && pnpm install --prod

# Expose port
EXPOSE 3002

# Start server
CMD ["node", "dist/index.js"]

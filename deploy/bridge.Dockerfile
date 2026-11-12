ARG NODE_IMAGE
FROM ${NODE_IMAGE}
WORKDIR /app
COPY server.cjs ./server.cjs
USER node
EXPOSE 3000
CMD ["node", "server.cjs"]

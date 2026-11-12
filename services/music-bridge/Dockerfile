FROM node:22.20-alpine AS build
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml tsconfig.json ./
COPY services/music-bridge/package.json services/music-bridge/tsconfig.json ./services/music-bridge/
RUN pnpm install --frozen-lockfile
COPY services/music-bridge/src ./services/music-bridge/src
RUN pnpm build:bridge

FROM node:22.20-alpine AS runtime
ENV NODE_ENV=production
WORKDIR /app
RUN corepack enable
COPY --from=build /app/package.json /app/pnpm-lock.yaml /app/pnpm-workspace.yaml ./
COPY --from=build /app/services/music-bridge/package.json ./services/music-bridge/
COPY --from=build /app/services/music-bridge/dist ./services/music-bridge/dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/services/music-bridge/node_modules ./services/music-bridge/node_modules
USER node
EXPOSE 3000
CMD ["node", "services/music-bridge/dist/server.js"]

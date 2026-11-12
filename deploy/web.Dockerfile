FROM node:22.20-alpine AS build
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml tsconfig.json vite.config.ts eslint.config.mjs .stylelintrc.json ./
COPY services/music-bridge/package.json services/music-bridge/tsconfig.json ./services/music-bridge/
RUN pnpm install --frozen-lockfile
COPY _config.yml _config.solitude.yml ./
COPY scripts ./scripts
COPY src ./src
COPY source ./source
RUN pnpm build

FROM nginxinc/nginx-unprivileged:1.29.1-alpine
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/public /usr/share/nginx/html
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -q -O - http://127.0.0.1:8080/healthz || exit 1

FROM node:18-alpine as build

WORKDIR /usr/src/app
RUN corepack enable

COPY .npmrc package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
    pnpm install --frozen-lockfile

COPY . .

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

ARG APP_TITLE=Portfolio
ENV VITE_APP_TITLE=${APP_TITLE}
ARG APP_SHORT_NAME=Portfolio
ENV VITE_APP_SHORT_NAME=${APP_SHORT_NAME}
ARG GITHUB_URL
ENV VITE_GITHUB_URL=${GITHUB_URL}
ARG FACEBOOK_URL
ENV VITE_FACEBOOK_URL=${FACEBOOK_URL}
ARG TWITTER_URL
ENV VITE_TWITTER_URL=${TWITTER_URL}
ARG LINKEDIN_URL
ENV VITE_LINKEDIN_URL=${LINKEDIN_URL}
ARG EMAIL
ENV VITE_EMAIL=${EMAIL}
ARG API_URL
ENV VITE_API_URL=${API_URL}
ARG BASE_URL
ENV BASE_URL=${BASE_URL}

RUN pnpm build

FROM nginx:stable-alpine

COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
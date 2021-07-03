FROM node:lts

WORKDIR /opt/next
COPY ./pages ./pages
COPY ./public ./public
COPY ./next-env.d.ts ./next-env.d.ts
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
COPY ./tsconfig.json ./tsconfig.json

RUN npm ci && npm run build && 
    groupadd -r next && useradd -r -g next next && chown -R next:next .next

USER next
CMD ["npm", "run", "start"]
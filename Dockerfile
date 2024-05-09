FROM node:20

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable


WORKDIR /app

COPY package.json .
# RUN git submodule init
# RUN git submodule update
RUN pnpm i

COPY . .

RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start"]

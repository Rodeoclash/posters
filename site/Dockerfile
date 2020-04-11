FROM node:13.12

ENV APP_HOME /usr/src/app
ENV PATH="${APP_HOME}/node_modules/.bin/:${PATH}"

EXPOSE 3000

WORKDIR $APP_HOME

COPY . $APP_HOME

RUN yarn install

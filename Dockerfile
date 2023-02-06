FROM node:lts

WORKDIR /ncnc-webapp

ARG GITHUB_PAT

# timezone
ENV TZ=Asia/Seoul
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

ARG NEXT_PUBLIC_API_URL=http://localhost:3001

COPY . .

RUN yarn set version berry \
  && yarn \
  && yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]
FROM ubuntu:22.04 

# RUN curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash
# RUN sudo apt install -y nodejs
# RUN sudo npm install -g yarn

FROM node:14


COPY ./package.json /class_build/
COPY ./yarn.lock /class_build/
WORKDIR /class_build/

RUN yarn install

# RUN mkdir class_qqq => 아래에서 COPY할때 자동으로 만들어주므로 굳이 안써도됨 

 # Docker의 저장방식 : 이미지로 저장
 # RUN 부분까지 1번해서 저장 
 # CMD 명령은 그떄그때 실행됨 
COPY . /class_build/
RUN yarn build
CMD yarn start
# pull official base image
FROM node:lts-bookworm
 
# pull official base image
FROM node:lts-bookworm
 
# set working directory
WORKDIR /kaur_tanureet_ui_garden/
 
# install app dependencies
COPY public/ /kaur_tanureet_ui_garden/public
COPY src/ /kaur_tanureet_ui_garden/src
COPY package.json /kaur_tanureet_ui_garden/
COPY . /kaur_tanureet_ui_garden
RUN npm install
 
# start app
CMD ["npm", "run", "storybook"]
# PolitiHub

* This web application uses react and mongo db to operate so the following is all necessary in order to
view in the browser 

$ git clone git@github.com:ElmasSayed/PolitiHub.git

$ cd politihub

$ npm install

* This web application has a user authenticated login system so we need
to initialize a mongo db server from our local device, the following command can be typed from any file directory**

$ mongod

* Leave mongo db running and pen a new bash command terminal

* The file directory is downloaded without a bundle.js file so to create the bundle.js file we type

$webpack --watch

* You can leave this webpack running or close it after it creates the bundle.js file in the public folder,
whichever you prefer. If you choose to keep it running than you need to open a new bach command terminal and type

$ node server


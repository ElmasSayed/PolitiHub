# PolitiHub

* This web application uses react and mongo db to operate so the following is all necessary in order to
view in the browser *

$ git clone git@github.com:ElmasSayed/PolitiHub.git

$ cd politihub

$ npm install

**This web application has a user authenticated login system so we need
to initialize a mongo db server from our local device**

$ mongod

Open a new node window from file root directoy and leave mongodb running in the background

The file directory is downloaded without a bundle.js file so to create the bundle.js file we type

$webpack --watch

You can leave this webpack running or close it after it creates the bundle.js file in the public folder,
whichever you perfer.

From root folder directory type

$ node server


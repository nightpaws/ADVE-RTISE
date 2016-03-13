#!/usr/bin/env bash
 echo Performing client build
 #Starting Client Build
 cd src/frontend/src
 npm install
 bower install
 bower update
 gulp build
 cd ../../..
 echo Client build completed.

 #Starting Server Build
 echo Performing server build
 #Starting Server Build
 cd src/backend
 npm install
 cd ../..
 echo Server build completed.

#Start Deployment
 echo Performing deployment
 gulp build

#Create Logging Directory
 echo establishing log directory...
 cd ./build
 mkdir ./logs
 echo touching conn.log
 touch ./logs/conn.log
 echo log file created.
 cd ..

#Completion Notice
 echo ------------------------------------------------------------$
 echo Setup Completed!
 echo You may now create certificates, insert a custom config or
 echo run \"cd build\" \& \"node index.js\" to launch the application.

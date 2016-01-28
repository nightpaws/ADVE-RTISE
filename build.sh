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
 cd src/backend
 npm install
 cd ../..
 echo Server build completed.

 echo Performing deployment
 gulp build

 echo Performing the failing run of the application
 echo This will fail as it must create files...
 cd ./build
 node index.js
 echo It should work now...

 echo ------------------------------------------------------------$
 echo DONE
 echo You may now sort the certs out, drop in a custom config and $
 echo run "cd ./build" & "node index.js" to make things go

 

 echo Performing client build
 :: Starting Client Build
 cd src/frontend/src
 call npm install
 call bower install
 call bower update
 call gulp build
 cd ../../..

:: Starting Server Build
 echo Performing server build
 cd src/backend
 call npm install
 cd ../..

 echo Performing deployment
 call gulp build

 echo Performing the failing run of the application
 echo This will fail as it must create files...
 cd ./build
 call node index.js
 cd ..
 echo It should work now...

 echo ------------------------------------------------------------$
 echo DONE
 echo You may now sort the certs out, drop in a custom config and $
 echo run "cd ./build" & "node index.js" to make things go

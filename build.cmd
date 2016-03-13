 echo Performing client build
 :: Starting Client Build
 cd src/frontend/src
 call npm install
 call bower install
 call bower update
 call gulp build
 cd ../../..
 echo Client build completed.

:: Starting Server Build
 echo Performing server build
 cd src/backend
 call npm install
 cd ../..
 echo Server build completed.

:: Start Deployment
 echo Performing deployment
 call gulp build

:: Create Logging Directory
 echo establishing log directory...
 cd ./build
 mkdir ./logs
 echo nul > ./logs/conn.log
 echo log file created.
 cd ..

#Completion Notice
 echo ------------------------------------------------------------$
 echo Setup Completed!
 echo You may now create certificates, insert a custom config or $
 echo run "cd build" & "node index.js" to launch the application.

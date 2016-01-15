#Configure Global Requirements. Please note that sudo is required to run this.
echo Configuring NPM...

if [ "$(whoami)" != "root" ]
then
echo You are not running as root. This script cannot run... \(Try sudo\)
else
#Streaming build system
npm install --global gulp
#installs gulp in project devDependencies
npm install --save-dev gulp
#File/Directory Deletion Utility
npm install --save-dev del
#Functions for gulp addons
npm install --save-dev gulp-util
#Front end package Manager
npm install --global bower

#Required to allow restart/persistent running. Crontab this to run on boot
npm install --global forever
echo Script has finished running. Thanks!
	fi

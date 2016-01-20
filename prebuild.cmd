:: Prebuild Script for Windows
::Adapted from: https://social.technet.microsoft.com/Forums/windows/en-US/bc8a4561-d97e-4339-9b1c-9b90e54a7f92/request-elevation-inside-cmdbatch-file
    echo Administrative permissions required. Detecting permissions...
    net session >nul 2>&1
    if %errorLevel% == 0 (
        if exist "%temp%\getadmin.vbs" ( del "%temp%\getadmin.vbs" )
        echo Success: Administrative permissions confirmed.
        echo Configuring NPM...
        CALL npm install --global gulp
        CALL npm install --save-dev gulp
        CALL npm install --save-dev del
        CALL npm install --save-dev gulp-util
        CALL npm install --global bower
        exit
    ) else (
        echo Failure: Administrative permissions required.
           echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\getadmin.vbs"
            echo UAC.ShellExecute "%~s0", "", "", "runas", 1 >> "%temp%\getadmin.vbs"
            "%temp%\getadmin.vbs"
            exit /B
    )


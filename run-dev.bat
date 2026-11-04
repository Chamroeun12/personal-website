@echo off
set "PATH=C:\Program Files\nodejs;%PATH%"
echo ========================================================
echo  Starting Chamroeun SARAN Personal Brand Platform...
echo  Local URL: http://localhost:3000
echo ========================================================
call "C:\Program Files\nodejs\npm.cmd" run dev
pause


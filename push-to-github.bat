@echo off
title Push to GitHub - Chamroeun SARAN Platform
set PATH=C:\Program Files\Git\cmd;%PATH%

echo ===================================================
echo   CHAMROEUN SARAN - PUSH TO GITHUB
echo ===================================================
echo Remote: https://github.com/Chamroeun12/personal-website.git
echo Branch: main
echo.
echo Pushing commits to GitHub...
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ===================================================
    echo [SUCCESS] Code successfully pushed to GitHub!
    echo ===================================================
) else (
    echo.
    echo ===================================================
    echo [INFO] If prompted above, please sign in to GitHub
    echo or enter your GitHub Personal Access Token (PAT).
    echo ===================================================
)

echo.
pause

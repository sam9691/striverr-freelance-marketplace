@echo off
echo Starting Fiverr Clone Development Servers...
echo.

echo Starting Backend Server...
start cmd /k "cd api && yarn start"

timeout /t 3 /nobreak > nul

echo Starting Frontend Server...
start cmd /k "cd client && yarn dev"

echo.
echo Both servers are starting in separate windows!
echo Backend: http://localhost:8800
echo Frontend: http://localhost:5173
echo.
pause

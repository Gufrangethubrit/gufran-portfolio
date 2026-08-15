@echo off
echo Installing Git and uploading to GitHub...
echo.
echo Step 1: Please install Git first from https://git-scm.com/download/win
echo Step 2: Create a new repository on GitHub at https://github.com/new
echo Step 3: Run this script again after installation
echo.
pause

REM Check if git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Git is not installed. Please install Git first.
    pause
    exit /b 1
)

echo Git is installed! Proceeding with upload...
echo.

REM Initialize git repository
git init

REM Add all files
git add .

REM Create initial commit
git commit -m "Initial commit - Portfolio project"

REM Ask user for repository URL
set /p repo_url="Enter your GitHub repository URL (e.g., https://github.com/username/repo-name.git): "

REM Add remote origin
git remote add origin %repo_url%

REM Push to GitHub
git branch -M main
git push -u origin main

echo.
echo Upload complete! Your project is now on GitHub.
pause
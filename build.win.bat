@echo off

:: Merge
copy /y /b src\meta.js + deps\tiny.js + src\main.js dist\jshint_layout_mod.user.js

echo.
echo Done!
echo.

pause

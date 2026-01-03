@echo off
echo ========================================
echo    ДЕПЛОЙ НА VERCEL
echo ========================================
echo.

echo 1. Создаю package.json для Vercel...
echo { > package.json
echo   "name": "my-site", >> package.json
echo   "version": "1.0.0", >> package.json
echo   "scripts": { >> package.json
echo     "start": "node server.js" >> package.json
echo   } >> package.json
echo } >> package.json

echo.
echo 2. Запускаю деплой...
echo    Если нет Vercel CLI - установи: npm install -g vercel
echo.

vercel --prod

echo.
echo ========================================
echo    Если видишь ошибку:
echo    1. Установи Vercel: npm install -g vercel
echo    2. Войди: vercel login
echo    3. Запусти снова
echo ========================================
pause

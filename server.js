// server.js для Vercel
const http = require('http');

// Функция которая будет вызываться Vercel
module.exports = (req, res) => {
  // Если есть index.html - показываем его
  const fs = require('fs');
  const path = require('path');
  
  try {
    const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
    res.setHeader('Content-Type', 'text/html');
    res.end(html);
  } catch (err) {
    res.statusCode = 200;
    res.end('<h1>Мой сайт на Vercel!</h1>');
  }
};

// Для локального запуска
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  const testServer = http.createServer(module.exports);
  testServer.listen(PORT, () => {
    console.log(`Локально: http://localhost:${PORT}`);
  });
}

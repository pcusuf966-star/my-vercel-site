const http = require('http');
const fs = require('fs');
const path = require('path');

// Простейший сервер
const server = http.createServer((req, res) => {
    console.log(`📥 ${req.method} ${req.url}`);
    
    let filePath = req.url === '/' ? 'index.html' : req.url;
    let fullPath = path.join(__dirname, filePath);
    
    fs.readFile(fullPath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('404 - Страница не найдена');
        } else {
            res.writeHead(200);
            res.end(content);
        }
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`
    ╔══════════════════════════════════════════╗
    ║           ✅ СЕРВЕР ЗАПУЩЕН!            ║
    ╚══════════════════════════════════════════╝
    
    📍 Локально: http://localhost:${PORT}
    
    🚀 Теперь открой ВТОРОЕ окно терминала
    🚀 И выполни: npx localtunnel --port ${PORT}
    
    ═══════════════════════════════════════════
    🌍 Получишь ссылку для друзей!
    ═══════════════════════════════════════════
    `);
});
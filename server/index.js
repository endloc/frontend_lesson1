// то что мы писали раньше исполнялось в браузере
// сейчас - на нашем компе
const fs = require('fs');
const http = ('http');
const debug = require('debug')('http');

debug('*');
const PORT = 3000;

const server = http.createServer((req, res) => {
    const {url} = req;

    const path = url === '/' ? 'index.html' : url;

    if (path === '/favicon.ico') {
        res.write('404');
        res.end();
    }

    // const file = fs.readFileSync(`./public/${path}`);
    const file = fs.readFile(`./public/${path}`, (err, data) => {
        if (err) {
            debug('*');
            res.write('404');
            res.end();
        }
        if (file) {
            res.write(file);
            res.end();
            return;
        }
    })

});
debug(`Server listening on localhost: ${PORT}`);
server.listen(PORT);

// DEBUG=* node server - запуск сервера

// npm package как сделать
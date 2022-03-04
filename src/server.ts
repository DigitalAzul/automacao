import http from "http";


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8'});
    res.end("Teste de automação");
}).listen(8080, () => {
    console.log("Server is running on 8080")
})
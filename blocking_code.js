const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end("Home page");
    }
    else if(req.url === '/about'){
        for(let i=0; i<1000;i++){
            for (let J = 0; J < 1000; J++) {
                console.log(`${i} ${J}`);
            }
        }
        res.end("About page");
    }
    else res.end("Error Page");
})
server.listen(5000,() => {
    console.log("Server Listerns on port 5000");
})
/* const os = require('os');

//info about current user
const user = os.userInfo()

//methos to get system uptime in seconds
console.log(os.uptime());

const details = {
    name : os.type(),
    release: os.release(),
    totalMemory : os.totalmem(),
    freeMemory : os.freemem()
}

console.log(details); */


/* ------------------------ path */

/* const path = require('path');

console.log(path.sep);

const file = path.join('content','subcontent','test.txt');
console.log(file);

console.log(path.basename(file))
console.log(path.resolve(__dirname,'content','subcontent','test.txt')) */

/* --------------------------------------- fs */

/* const { readFileSync, writeFileSync, readFile, writeFile } = require('fs')
// const fs = require('fs'); 
const first = readFileSync('./content/subcontent/first.txt', 'utf8');
const second = readFileSync('./content/subcontent/second.txt', 'utf8');

//console.log(first, second);

writeFileSync('./content/subcontent/new.txt', `New Result : ${first} and ${second}`, { flag: 'a' });

readFile('./content/subcontent/first.txt', 'utf8', (err, res) => {
    if (err) {
        return;
    }
    const first = res;
    readFile('./content/subcontent/second.txt', 'utf8', (err, res) => {
        if (err) {
            return;
        }
        const second = res;
        writeFile('./content/subcontent/asyn.txt', `A Sync result ${first} and ${second}`, { flag: 'a' }, (err, res) => {
            if(err){
                return;
            }
            console.log(res);
        })
    })

}) */

/* ------------------------ http */

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write("Welcome http Module");
        res.end();
    }
    if(req.url === '/about'){
        res.write("Welcome http Module");
        res.end();
    }

    res.end(
        `<h1>OPPS!</h1>`
    )
    
})

server.listen(5000);
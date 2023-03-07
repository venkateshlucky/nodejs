const {writeFileSync} = require('fs')

for (let i = 0; i<10000; i++){
    writeFileSync('./content/bigFile.txt',`File iteration data ${i}\n`,{flag : 'a'})
}
const { createReadStream } = require('fs')

const stream = createReadStream('./content/bigFile.txt',{highWaterMark : 700,encoding : 'utf8'})

stream.on('data',(result) => {
    console.log(result)
})
stream.on('data',(err) => {
    console.log(err)
})
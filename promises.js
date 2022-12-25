const { readFile, writeFile} = require('fs').promises

const fetchData = async() =>{
    try{
        const first = await readFile('./content/first.txt','utf8')
        const second = await readFile('./content/second.txt','utf8')
        console.log(first, second);
        await writeFile('./content/write.txt',`Here the write object : ${first} ${second}`,{flag : 'a'})
    }catch{
        
    }

}
fetchData()

/* const fetchData = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path,'utf8',(err, res) => {
            if(err){
                reject(err);
            }else{
                resolve(res);
            }
        })
    })
}
fetchData('./content/first.txt').then((result) => console.log(result)).catch((err) => console.log(err)) */
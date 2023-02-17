const http = require('http');
const fs = require('fs');

const host = 'localhost';
const port = 3000;

http.createServer((Request, Response) => {
    Response.write(fs.readFileSync('index.html'))
    //Response.write('adsasdasdas')
    return Response.end()
    // if (Request.url === '/home') {
    //     const read 
    // }
}).listen(port, host, () =>{
    console.log(`Server is running on http://${host}:${port}`);
})

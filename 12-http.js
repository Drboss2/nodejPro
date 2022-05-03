const http = require('http')

const server = http.createServer((req, res)=>{

   if(req.url === '/'){
      res.end('welcome to our home page')
   }

   if(req.url === '/about'){
      res.end('Here is about page')
   }

   // res.end(
   //    ` <h1>OOOOOPP NOPAGE</h1>
   //    <p>bddhdhdhdhdhdhdhd</p>
   //    <a href='/'>go back</a>
   //    `
   // )
})

server.listen(5000)
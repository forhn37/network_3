let http = require('http');
let fs = require('fs');

let server = http.createServer((req,res) => {
  if(req.url === '/'){

    fs.readFile('test.html', 'utf-8', (err, data) => {
      if(err) {
        console.log('error')
      }
      res.writeHead(200, {"Content-Type" : "text/html"})
      res.end(data)
    })
  }
})
server.listen(5050)
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(`
O))         O))    O))))     O))) O))))))
 O))       O))   O))    O))       O))    
  O))     O))  O))        O))     O))    
   O))   O))   O))        O))     O))    
    O)) O))    O))        O))     O))    
     O))))       O))     O))      O))    
      O))          O))))          O))   
`);
  res.end();
});

server.listen(8080, () => {
  console.log('Server started!');
});

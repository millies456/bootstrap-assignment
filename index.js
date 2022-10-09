const http = require('http') // IMPORT express

const port = 3000 // variable to store the port to listen on
const server = http.createServer(function(req, res){
res.write('hello node')
res.end()
})

server.listen(port ,function(error){
if(error){
    console.log('something went wrong', error)
}else{
    console.log('server is listening ' + port)
}
}
)

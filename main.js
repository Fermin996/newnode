const http = require('http')

const server = http.createServer((request, response)=>{
  console.log(request.url)
  response.write('jk dude ')
  response.end()
})

 server.listen(3000)

// if(request.url === 3000/perro){
//   response.write('cheezy pleazy')
//   response.end()
// }
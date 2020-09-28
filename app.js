// creating a constant variable 
const http = require('http')

// creating a port
const PORT = 7000

const student = [
    {name :"John"}
    
]



//creating the server entery point 
const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type": "application/json"})
    console.log('my server is now READY')
    res.w
  //  console.log(req.headers.authorization)


    // let body = []
    //  req.on("data",(chunk)=> {
    //      body.push(chunk);
    //  })
    //  .on("end", ()=>{
    //      body = Buffer.concat(body).toString();
    //      console.log(body)
    //  })

    res.write('hello work this is gideon work')

    

    res.end(JSON.stringify(student))
})
    



//server listening 
server.listen(PORT, ()=>{
    console.log('server listening to port 7000')

})
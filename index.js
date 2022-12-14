// let users = [
//     {nombre:"Javier", apellido: "Pacheco", correo: "javier@mail.com"},
//     {nombre:"Andres", apellido: "Polanco", correo: "andres@mail.com"},
//     {nombre:"Julian", apellido: "Mattos", correo: "julian@mail.com"},
//     {nombre:"Andrea", apellido: "Sarmiento", correo: "andrea@mail.com"},
//     {nombre:"Jazmin", apellido: "Gonzales", correo: "jazmin@mail.com"},
// ]

const express = require ('express')

const app = express()
const port = 1234

app.get('/',(req,res) =>{
    res.json(users)
})

app.get('/user',(req,res) =>{
    res.send('Luisa Alessandra Chavez Tarazona')
})

app.get('/mat',(req,res) =>{
    res.send('2+2=4')
})

app.listen(port, () =>{
    console.log(`El servidor está escuchando en http://localhost:${port}`)
})

// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type','text/plain');
//     res.end('Luisa Alessandra Chavez Tarazona')
// })

// server.listen(port,hostname,()=>{
//     console.log(`El servidor se está ejecutando en http://${hostname}:${port}`)
// })
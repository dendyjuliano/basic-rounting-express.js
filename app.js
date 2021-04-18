const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // res.send('Hello World!')
    // res.json({
    //     nama: 'Dendy',
    //     email: 'dendy@gmail.com'
    // })
    res.sendFile('./index.html', { root: __dirname })
})

app.get('/about', (req, res) => {
    res.sendFile('./about.html', { root: __dirname })
})

app.get('/contact', (req, res) => {
    res.sendFile('./contact.html', { root: __dirname })
})

app.get('/product/:id', (req, res) => {
    res.send(`Product ID: ${req.params.id} <br> Category Id : ${req.query.category}`)
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>404</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})














// const http = require('http')
// const fs = require('fs')
// const port = 3000

// const renderHtml = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             res.writeHead(404)
//             res.write('Error : file not found')
//         } else {
//             res.write(data)
//         }
//         res.end()
//     })
// }

// http.createServer((req, res) => {

//     res.writeHead(200, {
//         'Content-Type': 'text/html',
//     })

//     const url = req.url

//     switch (url) {
//         case '/about':
//             renderHtml('./about.html', res)
//             break
//         case '/contact':
//             renderHtml('./contact.html', res)
//             break
//         default:
//             renderHtml('./index.html', res)
//             break
//     }
// })
//     .listen(port, () => {
//         console.log(`Listening on port ${port}`)
//     })
const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    return res.send("Home Page");
})
app.get("/about", (req, res) => {
    return res.send(`Hi ${req.query.myname}, this is a server built by Morty`);
})

app.listen(8000, () => console.log("server started"));

// function myhandler(req, res){
//     if(req.url === "favicon.ico") return res.end();

//     const log = `${Date.now()}: \t ${req.method}  ${req.url}\t  New Req Received\n`;
//     const myURL = url.parse(req.url, true);

//     if (req.url !== "/favicon.ico"){
//     fs.appendFile("log.txt", log, (err, data) => {
//         switch(myURL.pathname){
//             case "/":
//                 res.end("HomePage");
//                 break;
//             case "/about":
//                 const username = myURL.query.myname;
//                 res.end(`hi ${username}, I am Server build through Morty.`);
//                 break; 
//             default:
//                 res.end("404: Page not found");
//         }
//     })};
// }

// const myServer = http.createServer(app);
// myServer.listen(8000, ()=>console.log("server started"));
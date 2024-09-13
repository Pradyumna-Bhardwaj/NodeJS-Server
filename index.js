const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    if(req.url === "favicon.ico") return res.end();

    const log = `${Date.now()}: \t ${req.method}  ${req.url}\t  New Req Received\n`;
    const myURL = url.parse(req.url, true);

    if (req.url !== "/favicon.ico"){
    fs.appendFile("log.txt", log, (err, data) => {
        switch(myURL.pathname){
            case "/":
                res.end("HomePage");
                break;
            case "/about":
                const username = myURL.query.myname;
                res.end(`hi ${username}, I am Server build through Morty.`);
                break; 
            default:
                res.end("404: Page not found");
        }
    })};
});
myServer.listen(8000, ()=>console.log("server started"));
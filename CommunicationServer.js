const http = require("http");
const fetch = require('node-fetch');

const host = 'localhost';
const port = 8000;
//this pulls in the environmental variable set by $NASA = API Key
const NASA = process.env.NASA;
const clickup = "testb";

async function test(){
    NASAurl = ('https://api.nasa.gov/planetary/apod?api_key='+NASA);
    console.log(NASAurl);
    //try{                 
        const response = await fetch(NASAurl);
        const json = await response.json()

        console.log('Entered the ASYNC try statement');
        console.log(json[0]);
        console.log(json.url);
        console.log(json.explanation);
    //} //catch (error) {
       // console.log('error yo');
        //console.log(error.response.body);
    //}
};

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch(req.url) {
        case "/books":
            res.writeHead(200);
            console.log('Web Server Worked');
            test();
            res.end(JSON.stringify({error:"Page finished, check console?"}));
            //request.open('GET', 'http://localhost:8080'+'/https://www.google.com');//+'/https://api.clickup.com/api/v2/user'
           //request.open('GET', '/http://api.clickup.com/api/v2/user');
    
            //$Env:clickupAuthKey to retrieve environmental variable for this
           // request.setRequestHeader('Authorization', clickupAuthKey);
           // console.log(request.getResponseHeader)
    
            /*request.onreadystatechange = function () {
                if (this.readyState === 4) {
                    console.log('Status:', this.status);
                    console.log('Headers:', this.getAllResponseHeaders());
                    console.log('Body:', this.responseText);
                }
            };
    
            request.send();	
            res.end(clickup);*/
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error:"Default 404 Massage"}));
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
var express = require("express");
var app = express();

app.get('/', function(request, response) {
    // ip address 
    var ip_address = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
    
    // browser language
    var lang = request.headers["accept-language"];
    // format the lang string 
    lang = lang.substring(0, lang.lastIndexOf(',') + 1);
    
    // operating system
    var os = request.headers['user-agent'];
    // format user agent string
    os = os.substring(os.lastIndexOf('(') + 1 , os.lastIndexOf(')'));
    
    var result = {
        'IP-address': ip_address,
        'language': lang,
        'software': os
    };
    
    response.send(result);
});

app.listen('8080');
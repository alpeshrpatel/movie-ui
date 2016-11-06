/**
 * Created by arpate on 11/3/16.
 */
var Client = require('node-rest-client').Client;

var client = new Client();

// direct way
client.get("http://localhost:8081/wis-api/school/list", function (data, response) {
    // parsed response body as js object
    console.log(data);
    // raw response
    //console.log(response);
});
const request = require('request');
const fs = require("fs");

const URLRequested = process.argv[2];
const localFilePath = process.argv[3];

request(URLRequested, (error, response, body) => {

  if(error){
    console.log('error:', error); // Print the error if one occurred

  }

  fs.writeFile(localFilePath, body, (error) => {
    if (error){
      console.log('error:', error); // Print the error if one occurred


    }
    console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${localFilePath}`);

  });
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
});
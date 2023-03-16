// Command line argument breed name to call on cat API and returns cat breed as an object that we may access properties of 

const argsArray = process.argv.slice(2); 
const breedName = argsArray[0]; 
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`; 
const request = require('request');

request(URL, (error, response, body) => {    
    if (error) { // Print the error if one occurred
      console.log('error: ', error);
    } else if (response.statusCode !== 200) {
      console.log(`error: , ${response.statusCode}`)
    } else {
      const data = JSON.parse(body) // change the body from a string to an object 
      if (data.length === 0) {
        console.log(`error: Breed not found`);
      } else {
      console.log('name:', data[0].name); // prints out the content of the search query for found breed 
      console.log('---');
      console.log(data[0].description);
      console.log(data[0].weight, `that's a chonk!`)
      console.log('---');
      }
    }
  });
  

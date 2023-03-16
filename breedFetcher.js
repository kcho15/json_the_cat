
const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  // call callback if there is an error from request, description value is null OR
  // error value is null, carry on the function
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) { // Print the error if one occurred
      callback(error);
    } else if (response.statusCode !== 200) {
      callback(`status code: , ${response.statusCode}`);
    } else {
      const data = JSON.parse(body); // change the body from a string to an object
      if (data.length === 0) {
        callback(`Breed not found`);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};





module.exports = { fetchBreedDescription };
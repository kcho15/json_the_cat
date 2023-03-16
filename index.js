// Command line argument breed name to call on cat API and returns cat breed as an object that we may access properties of

const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => { 
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});



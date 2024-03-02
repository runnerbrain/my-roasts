require('dotenv').config();
const connectToDb = require('./src/utils/db'); // Adjust the path according to your project structure

connectToDb()
  .then(() => {
    console.log('Connection Test Successful');
    process.exit(0); // Exit the process with success code
  })
  .catch((error) => {
    console.error('Connection Test Failed', error);
    process.exit(1); // Exit the process with failure code
  });
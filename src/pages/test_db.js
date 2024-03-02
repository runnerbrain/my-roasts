const mongoose = require('mongoose');
const Collection = mongoose.model('artisan');

async function TestDbPage() {
  let connected = false;
  let data = []; // Initialize data array

  try {
    const db = await connectToDb();
    connected = true;

    // Fetch data from your collection
    data = await Collection.find().toArray();
  } catch (error) {
    // Handle error
  }

  // Render the data or handle connection error
  return (
    <div>
      {connected ? (
        <ul>
          {data.map((item) => (
            <li key={item._id}>{item.name}</li> // Assuming "name" is a property
          ))}
        </ul>
      ) : (
        <p>Error connecting to MongoDB Atlas. Check the console for details.</p>
      )}
    </div>
  );
}
const express = require('express');
const app = express();
const port = process.env.PORT || 5002; // Use 'PORT' instead of 'port'
const cors = require("cors")

app.use(cors());
app.use(express.json()); // Add body parser middleware to parse JSON requests

app.get('/', (req, res) => {
  res.send('Hello');
});

// MongoDB configuration
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const uri = "mongodb+srv://hemsdarji8160304190:9FlKeMwkXSzY5WNK@test-db.uf9oscc.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {
    await client.connect();
    const collection = client.db("BookInventory").collection("books");


    // insert a book into the db : post method 
    app.post("/upload-book", async (req, res) => {
      const data = req.body; // Parse the request body as JSON
      const result = await collection.insertOne(data);
      res.send(result);
    });

    // get all books from the database

    app.get("/all-books", async(req,res) => {
      const books = await collection.find({}).toArray();
       res.send(books);
    })

    // update book data : patch or update method uses

    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          ...updateBookData
        },
      };
      const options = { upsert: true };

      const result = await collection.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    // delete method use

    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      // req.params.id would be equal to "123."
      // const filter = { _id: new ObjectId(id) };: This line creates a filter object that specifies which book to delete. 
      // const result = await collection.deleteOne(filter);: This line performs the actual deletion of the book from the MongoDB database collection.
      // res.send(result);: Finally, this line sends a response to the client. 
      const filter = { _id: new ObjectId(id) };
      const result = await collection.deleteOne(filter);
      res.send(result);
    })

    // find method

    app.get("/all-books", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category }
      }

      const result = await collection.find(query).toArray();
      res.send(result);
    });
    // http://localhost:5000/all-books?category=Fiction (find in google using this url for information perspective)

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

run().catch(console.error);

// Next two lines do the same thing, to use ID field in db use this syntax
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// Create an _id independently from MongoDB
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Could not connect to MongoDb server.');
  };
  console.log('Connected to MongoDB server');

    // deleteMany, deleteOne, findOneAndDelete

    // db.collection('Todos').deleteMany({text:'Walk the dog'}).then((res) => {
    //   console.log(JSON.stringify(res, undefined, 3));
    // });
    
    // db.collection('Todos').deleteOne({text: 'Walk the dog.'}).then((res) => {
    //     console.log(JSON.stringify(res, undefined, 3));
    // });

    // db.collection('Todos').findOneAndDelete({completed: true}).then((res) => {
    //     console.log(res);
    // });

    // db.collection('Users').deleteMany({age:37}).then((res) => {
    //     console.log(res);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('58e834ac4fde425ed1eb2d1f')}).then((res) => {
        console.log(res);
    });

//   db.close();
});
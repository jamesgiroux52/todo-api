// Next two lines do the same thing
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

  // Insert a todo entry
  // db.collection('Todos').insertOne({
  //   text: 'Become a PADI Instructor',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to add ToDo', err);
  //   };
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert a user entry
  // db.collection('Users').insertOne({
  //   // You can manualy set the _id property as below
  //   // _id: 123,
  //   name: 'James Giroux',
  //   age: 37,
  //   location: 'Toronto'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to add ToDo', err);
  //   };
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});

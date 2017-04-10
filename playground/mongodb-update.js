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

  // Updating data in colections

  // findOneAndUpdate

//   db.collection('Todos').findOneAndUpdate({
//         // text: 'Walk the dog.'
//         _id: new ObjectID('58e9cec493c4c42ac4bfb1cf')
//     }, {
//         $set: {
//             text: 'Walk the dog'
//         }
//     }, {
//         returnOriginal: false
//     }).then((res) => {
//         console.log(res);
//     });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('58e834abd65c235ed0e95974')
    }, {
        $inc: {
            age: 1
        },
        $set: {
            name: 'James Giroux'
        }
    }, {returnOriginal: false}).then((res) => {
        console.log(res);
    });

//   db.close();
});
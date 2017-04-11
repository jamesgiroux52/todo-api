const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//     console.log(res);
// });

// Todo.findOneAndRemove({})
Todo.findOneAndRemove({_id:'58ed5a6f2f657c065e743bcd'}).then((todo) => {
    console.log(todo);
});

// Todo.findByIdAndRemove()
// Todo.findByIdAndRemove('58ed473c2f657c065e743b5f').then((todo) => {
//     console.log(todo);
// });
var mongoose = require('mongoose');

var todoSchema = {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Date,
        default: null
    }
};

var Todo = mongoose.model('Todo', todoSchema);

module.exports = {Todo};
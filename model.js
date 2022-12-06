const mongoose = require('mongoose');

var taskSchema = mongoose.Schema({
    
  
    name: {
        type: String,
        required: true,
    },
    expiry: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: false
    },
     deleted: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

var Task = mongoose.model('task', taskSchema);

module.exports = Task;
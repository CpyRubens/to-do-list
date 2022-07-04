const mongooose = require('mongoose');

const ToDoSchema = new mongooose.Schema({
  time: { type: String, required: true },
  description: { type: String, required: true },
});

const Todo = mongooose.model('todolist', ToDoSchema);

module.exports = Todo;
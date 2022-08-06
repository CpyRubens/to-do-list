const mongooose = require('mongoose');

const ToDoSchema = new mongooose.Schema({
  titulo: { type: String, required: true },
  horario: { type: String, required: true },
  descricao: { type: String, required: false },
  alarme: { type: Boolean, required: false },

});

const Todo = mongooose.model('todolist', ToDoSchema);

module.exports = Todo;
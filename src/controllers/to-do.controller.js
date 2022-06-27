const ToDoService = require('../services/to-do.service');

const findAllToDoController = (req, res) => {
  const to_do = ToDoService.findAllToDoService();
  res.send(to_do);
};

const findByIdToDoController = (req, res) => {
  const parametroId = Number(req.params.id);
  const escolhaTo_Do = ToDoService.findByIdToDoService(parametroId);
  res.send(escolhaTo_Do);
};

const createToDoController = (req, res) => {
  const to_do = req.body;
  const newToDo = ToDoService.createToDoService(to_do);
  res.send(newToDo);
};

const updateToDoController = (req, res) => {
  const idParam = Number(req.params.id);
  const toDoEdit = req.body;
  const updateToDo = ToDoService.updateToDoService(idParam, toDoEdit);
  res.send(updateToDo);
};

const deleteToDoController = (req, res) => {
  const idParam = Number(req.params.id);
  ToDoService.deleteToDoService(idParam);
  res.send({message:'Item da lista deletado com sucesso!'})
};
module.exports = {
  findAllToDoController,
  findByIdToDoController,
  createToDoController,
  updateToDoController,
  deleteToDoController,
};

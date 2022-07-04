
const Todolists = require('../models/Todo');

const findAllToDoService = async () => {
  const toDoList = await Todolists.find();
  return toDoList;
};

const findByIdToDoService = async (idParam) => {
  const toDoList = await Todolists.findById(idParam)
  return toDoList;
};

const createToDoService = async (newtoDo) => {
  const newToDo = await Todolists.create(newtoDo)
  return newToDo;
};

const updateToDoService = async (id, toDoEdit) => {
  const toDoUpdated = await Todolists.findByIdAndUpdate(id, toDoEdit)
  return toDoUpdated;
};

const deleteToDoService = async (id) => {
  return await Todolists.findByIdAndDelete(id);
};

module.exports = {
  findAllToDoService,
  findByIdToDoService,
  createToDoService,
  updateToDoService,
  deleteToDoService,
};

const ToDoService = require('../services/to-do.service');
const mongoose = require('mongoose');


const findAllToDoController = async (req, res) => {
  const ToDo = await ToDoService.findAllToDoService();
  res.send(ToDo);
};

const findByIdToDoController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res
      .status(400)
      .send({ message: 'ID inválido!' });
    return;
  }

  const escolhaToDo = await ToDoService.findByIdToDoService(idParam);

  if (!escolhaToDo) {
    return res.status(404).send({ message: "ToDo não encontrada!" })
  }

  res.send(escolhaToDo);
};

const createToDoController = async (req, res) => {
  const ToDo = req.body;
  if (
    !ToDo ||
    !ToDo.time ||
    !ToDo.description
  ) {
    res.status(400).send({ mensagem: "Você não preencheu todos os dados para adicionar uma nova ToDo a sua lista!" });

  }
  const newToDo = await ToDoService.createToDoService(ToDo);
  res.send(newToDo);
};

const updateToDoController = async (req, res) => {
  const idParam = req.params.id;
  const ToDoEdit = req.body;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(400).send({ message: 'ID inválido!' });
    return;
  }

  const escolhaToDo = await ToDoService.findByIdToDoService(idParam);

  if (!escolhaToDo) {
    return res.status(404).send({ message: "ToDo não encontrada!" })
  }


  if (!ToDoEdit || !ToDoEdit.time || !ToDoEdit.description) {
    return res.status(400).send({ message: "Você não preencheu todos os dados para editar a ToDo!" });
  }

  const updateToDo = await ToDoService.updateToDoService(idParam, ToDoEdit);
  res.send(updateToDo);
};

const deleteToDoController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(400).send({ message: 'ID inválido!' });
    return;
  }

  const escolhaToDo = await ToDoService.findByIdToDoService(idParam);

  if (!escolhaToDo) {
    return res.status(404).send({ message: "ToDo não encontrada!" })
  }


  await ToDoService.deleteToDoService(idParam);
  res.send({ message: 'Item da lista deletado com sucesso!' })
};
module.exports = {
  findAllToDoController,
  findByIdToDoController,
  createToDoController,
  updateToDoController,
  deleteToDoController,
};

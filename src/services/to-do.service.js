const toDoList = [
    {
      id: 1,
      time:"07h00",
      description:"Acordar",
    },
  ];
  
  const findByIdToDoService = (parametroId) => {
    return toDoList.find((toDo) => toDo.id === parametroId);
  };
  
  const findAllToDoService = () => {
    return toDoList;
  };
  
  const createToDoService = (newtoDo) => {
    const newId = toDoList.length +1;
    newtoDo.id = newId;
    toDoList.push(newtoDo)
    return newtoDo;
  };
  
  const updateToDoService = (id, toDoEdit) => {
    toDoEdit ['id'] = id;
    const toDoIndex = toDoList.findIndex((toDo)=> toDo.id == id);
    toDoList[toDoIndex] = toDoEdit;
    return toDoEdit;
  };
  
  const deleteToDoService = (id) => {
    const toDoIndex = toDoList.findIndex((toDo)=> toDo.id == id);
    return toDoList.splice(toDoIndex, 1);
  };
  
  module.exports = {
    findAllToDoService,
    findByIdToDoService,
    createToDoService,
    updateToDoService,
    deleteToDoService,
  };
  
const route = require('express').Router();

const controllerTodo = require('../controllers/to-do.controller');

route.get('/all-itens', controllerTodo.findAllToDoController);
route.get('/item/:id', controllerTodo.findByIdToDoController);
route.post('/create-item', controllerTodo.createToDoController);
route.put('/update-item/:id', controllerTodo.updateToDoController);
route.delete('/delete-item/:id', controllerTodo.deleteToDoController);

module.exports = route;

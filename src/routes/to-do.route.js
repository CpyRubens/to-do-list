const route = require('express').Router();

const controllerTodo = require('../controllers/to-do.controller');

route.get('/', controllerTodo.findAllToDoController);
route.get('/:id', controllerTodo.findByIdToDoController);
route.post('/', controllerTodo.createToDoController);
route.put('/:id', controllerTodo.updateToDoController);
route.delete('/:id', controllerTodo.deleteToDoController);

module.exports = route;

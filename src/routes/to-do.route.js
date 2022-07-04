const route = require('express').Router();

const controllerTodo = require('../controllers/to-do.controller');

route.get('/all', controllerTodo.findAllToDoController);
route.get('/to-do/:id', controllerTodo.findByIdToDoController);
route.post('/create', controllerTodo.createToDoController);
route.put('/update/:id', controllerTodo.updateToDoController);
route.delete('/delete/:id', controllerTodo.deleteToDoController);

module.exports = route;

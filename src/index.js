require('style!css!../node_modules/bootstrap/dist/css/bootstrap.min.css');

import angular from '../node_modules/angular';
import ngResource from '../node_modules/angular-resource';
import ToDoResource from './todoList/TodoResource';

import TodoListController from './todoList/TodoListController';

angular.module('todoApp', [ngResource])
	.service('ToDoResource', ToDoResource)
	.controller('TodoListController', TodoListController);

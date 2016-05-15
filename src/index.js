// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// use require instead of import
require('style!css!../node_modules/bootstrap/dist/css/bootstrap.min.css?insertAt=top');
// require('style/url!file!../node_modules/bootstrap/dist/css/bootstrap.min.css?insertAt=top');
// we can use package.json script way to cp bootstrap.js into build env

import angular from '../node_modules/angular';
import ngResource from '../node_modules/angular-resource';
import ToDoResource from './todoList/TodoResource';

import TodoListController from './todoList/TodoListController';

angular.module('todoApp', [ngResource])
	.service('ToDoResource', ToDoResource)
	.controller('TodoListController', TodoListController);

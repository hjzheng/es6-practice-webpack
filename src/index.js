require('style!css!../node_modules/bootstrap/dist/css/bootstrap.min.css');

import angular from '../node_modules/angular';

import TodoListController from './todoList/TodoListController';

angular.module('todoApp', []).controller('TodoListController', TodoListController);

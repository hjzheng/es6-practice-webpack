function inject(...list) {
	return function(target) {
		target.$inject = list;
	};
}

// http://technologyadvice.github.io/es7-decorators-babel6/
// make babel 6 support decorators
import './todo.css';

@inject('$log', 'ToDoResource')
class TodoListController {
	constructor($log, ToDoResource) {
		this.todos = [];
		this.$log = $log;
		this.ToDoResource = ToDoResource;
		this.init();
	}

	addTodo() {
		if (this.todoText) {
			this.todos.push({text: this.todoText, done: false});
			this.ToDoResource.save({text: this.todoText, done: false});
			this.$log.info('add new Todo: ' + this.todoText);
		}
	}

	removeTodo(id) {
		this.ToDoResource.delete({id: id}, data => {
			if (data.success) {
				this.todos.splice(id, 1);
			}
		});
	}

	remaining() {
		return this.todos.filter(todo => todo.done === false).length;
	}

	mark(index, todo) {
		this.ToDoResource.update({id: index}, todo);
	}

	archive() {
		let dones = this.todos.filter(todo => todo.done);
		dones.forEach((todo, index) => {
			this.removeTodo(index);
		});
		this.todos = this.todos.filter(todo => !todo.done);
	}

	init() {
		this.ToDoResource.list(list => {
			this.todos = list;
		});
		this.$log.info('init');
	}
}

// TodoListController.$inject = ["$log"];

export default TodoListController;
/*
* 如果使用Set数据结构, ng-repeat 如何识别,
*
* 可以通过对Set继承, 实现length属性和数组的取值方式
*
* 或者使用 Set.prototype.values 方法 返回一个数组
*
* 如何对该 controller 进行依赖注入, use decorators to support ngInject
*
* npm package ng-decorators
*
* for ESlint, you can use http://editorconfig.org/ override the webstorm config
*/

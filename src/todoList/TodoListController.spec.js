/**
 * Created by hjzheng on 16/5/16.
 */
describe('TodoListController', () => {
	let vm, httpBackend;

	beforeEach(angular.mock.module('todoApp'));

	beforeEach(angular.mock.inject(($controller, $httpBackend) => {
		httpBackend = $httpBackend;
		httpBackend.when('GET', '/todos').respond(
			[
				{text: 'Learn AngularJS', done: false},
				{text: 'Learn Webpack', done: false},
				{text: 'Learn Karma', done: false}
			]
		);

		vm = $controller('TodoListController');

		httpBackend.flush();
	}));

	it('init', () => {
		expect(vm.todos.length).toEqual(3);
	});

	it('removeTodo', () => {
		httpBackend.when('DELETE', '/todos/1').respond({success: true});
		vm.removeTodo(1);
		httpBackend.flush();
		expect(vm.todos.length).toBe(2);
	});

	it('addTodo', () => {
		vm.todoText = 'Learn karma';
		vm.addTodo();
		vm.addTodo();
	    expect(vm.todos.length).toBe(5);
	});


	it('archive', () => {
		vm.todoText = 'Learn karma';
		vm.addTodo();
		vm.addTodo();
		vm.todos[1].done = true;
		vm.archive()
		expect(vm.todos.length).toBe(4);
	});
});


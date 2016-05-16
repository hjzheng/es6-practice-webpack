/**
 * Created by hjzheng on 16/5/16.
 */
describe('TodoListController', () => {
	let vm, httpBackend;

	beforeEach(angular.mock.module('todoApp'));

	beforeEach(angular.mock.inject(($controller, $httpBackend) => {
		httpBackend = $httpBackend;
		vm = $controller('TodoListController');
	}));

	it('init', () => {
		// 注意GET等都要大写
		httpBackend.when('GET', '/todos').respond(
			[
				{text: 'Learn AngularJS', done: false},
				{text: 'Learn Webpack', done: false},
				{text: 'Learn Karma', done: false}
			]
		);

		vm.init();

		httpBackend.flush();

		expect(vm.todos.length).toEqual(3);
	});

	it('addTodo', () => {
		vm.todoText = 'Learn karma';
		vm.addTodo();
		vm.addTodo();
	    expect(vm.todos.length).toBe(2);
	});


	it('archive', () => {
		vm.todoText = 'Learn karma';
		vm.addTodo();
		vm.addTodo();
		vm.todos[1].done = true;
		vm.archive()
		expect(vm.todos.length).toBe(1);
	});
});


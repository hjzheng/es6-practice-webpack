module.exports = function(app) {

	var todos = [
		{text: 'Learn ES6', done: false},
		{text: 'Learn AngularJS', done: false},
		{text: 'Learn Webpack', done: false}
	];

	app.get('/todos', function(req, res) {
		res.json(todos);
	});

	app.get('/todos/:id', function(req, res) {
		res.send(todos[req.params.id]);
	});

	app.post('/todos/save', function(req, res) {
		todos.push({text: req.body.text, done: req.body.done});
		res.json({'success': true});
	});

	app.put('/todos/:id', function(req, res) {
		console.log(todos[req.params.id]);
		todos[req.params.id] = {text: req.body.text, done: req.body.done}
		res.json({'success': true});
	});

	app.delete('/todos/:id', function(req, res) {
		todos.splice(req.params.id, 1);
		res.json({'success': true});
	});
};

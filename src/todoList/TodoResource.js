export default function TodoResource($resource) {
	return $resource('/todos/:id', {id: '@id'}, {
		delete: {
			method: 'DELETE',
			url: '/todos/:id'
		},
		save: {
			method: 'POST',
			url: '/todos/save'
		},
		get: {
			url: '/todos/:id'
		},
		update: {
			method: 'PUT',
			url: '/todos/:id'
		},
		list: {
			url: '/todos',
			isArray: true
		}
	});
}
TodoResource.$inject = ['$resource'];

export default function TodoResource($resource) {
	return $resource('/todos/:id', {id: '@id'}, {
		delete: {
			method: 'DELETE'
		},
		save: {
			method: 'POST',
			url: '/todos/save'
		},
		update: {
			method: 'PUT',
		},
		list: {
			url: '/todos',
			isArray: true
		}
	});
}
TodoResource.$inject = ['$resource'];

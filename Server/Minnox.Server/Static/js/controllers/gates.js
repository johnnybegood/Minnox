define([
    'collections/gate',
    'views/gates'
], function (Collection, View) {

	var gatesController = {
		index: function () {
			var model = new Collection([
				{ id: 1, name: 'Gate 1'},
				{ id: 2, name: 'Gate 2'}
			]);
			
			// model.reset([
			// 	{ id: 1, name: 'Gate 1'},
			// 	{ id: 2, name: 'Gate 2'}
			// ]);

			return new View({model: model});
		}
	};

	return gatesController;

});
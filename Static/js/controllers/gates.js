define([
    'collections/gate-device',
    'views/gates'
], function (GateCollection, View) {

	var gatesController = {
		index: function () {
		    var model = new GateCollection();
		    model.fetch();

			return new View({model: model});
		}
	};

	return gatesController;
});
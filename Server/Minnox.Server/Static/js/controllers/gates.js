define([
    'models/gate-settings',
    'views/gates'
], function (Settings, View) {

	var gatesController = {
		index: function () {
		    var model = new Settings();
		    model.fetch();

			return new View({model: model});
		}
	};

	return gatesController;

});
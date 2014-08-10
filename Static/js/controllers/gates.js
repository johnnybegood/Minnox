define([
    'collections/gate-device',
    'views/gates',
    'collections/gate-discovery'
], function (GateDeviceCollection, IndexView, GateDiscoveryCollection) {

	var gatesController = {
		index: function () {
		    var model = new GateDeviceCollection();
		    model.fetch();

			return new IndexView({model: model});
		},

		discover: function () {
			var model = new GateDiscoveryCollection();
			model.fetch();
		}
	};

	return gatesController;
});
define([
    'collections/gate-device',
    'views/gates',
    'collections/gate-discovery',
    'views/discover-gates'
], function (GateDeviceCollection, IndexView, GateDiscoveryCollection, DiscoveryView) {

	var gatesController = {
		index: function () {
		    var model = new GateDeviceCollection();
		    model.fetch();

			return new IndexView({model: model});
		},

		discover: function () {
			var model = new GateDiscoveryCollection();
			model.fetch();

			return new DiscoveryView({model: model});
		}
	};

	return gatesController;
});
/*global define*/

define([
    'underscore',
    'backbone',
    'models/gate-device'
], function (_, Backbone, GateDiscoveryModel) {

    var GateDiscoveryCollection = Backbone.Collection.extend({
        model: GateDiscoveryModel,
        url: '/api/gate/discover'
    });

    return GateDiscoveryCollection;
});

/*global define*/

define([
    'underscore',
    'backbone',
    'models/gate-device'
], function (_, Backbone, GateDeviceModel) {

    var GateDeviceCollection = Backbone.Collection.extend({
        model: GateDeviceModel,
        url: '/api/gate'
    });

    return GateDeviceCollection;
});

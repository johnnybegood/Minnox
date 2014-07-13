define([
    'underscore',
    'backbone',
    'models/gate'
], function (_, Backbone, GateModel) {

    var GateCollection = Backbone.Collection.extend({
        model: GateModel
    });

    return GateModel;
});

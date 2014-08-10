define([
    'underscore',
    'backbone'
], function (_, Backbone) {
   
    var GateDiscovery = Backbone.Model.extend({
        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return GateDiscovery;
});

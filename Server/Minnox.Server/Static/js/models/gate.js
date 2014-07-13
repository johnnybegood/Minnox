/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
   
    var GateModel = Backbone.Model.extend({
        url: '/gates',

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

    return GateModel;
});

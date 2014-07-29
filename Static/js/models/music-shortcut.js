/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
   
    var MusicShortcutsModel = Backbone.Model.extend({
        url: '',

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

    return MusicShortcutsModel;
});

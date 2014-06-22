define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {

	var HomeView = Backbone.View.extend({
        template: JST['js/templates/home.hbs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
        },

        render: function () {
            return this.$el.html(this.template());
        }
    });

    return HomeView;

});
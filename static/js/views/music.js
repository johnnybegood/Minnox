define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {

	var HomeView = Backbone.View.extend({
        template: JST['js/templates/music.hbs'],

        tagName: 'div',

        id: 'music',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            return this.$el.html(this.template());
        }
    });

    return HomeView;

});
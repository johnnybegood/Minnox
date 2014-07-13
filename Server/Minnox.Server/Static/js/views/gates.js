define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST, options) {

	var HomeView = Backbone.View.extend({
        template: JST['js/templates/gates.hbs'],

        tagName: 'div',

        id: 'gates-index',

        className: '',

        events: {},

        initialize: function () {
            if (options)
            {
                if (options.model) { this.model = options.model; }
            }

            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            return this.$el.html(this.template(this.model.toJSON()));
        }
    });

    return HomeView;

});
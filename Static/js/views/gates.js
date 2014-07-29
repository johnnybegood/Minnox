define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'amplify'
], function ($, _, Backbone, JST, amplify, options) {

	var HomeView = Backbone.View.extend({
        template: JST['js/templates/gates.hbs'],

        tagName: 'div',

        id: 'gates-index',

        className: '',

        events: {
            'click #open-action': 'openGate'
        },

        initialize: function () {
            if (options)
            {
                if (options.model) { this.model = options.model; }
            }

            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            return this.$el.html(this.template(this.model.toJSON()));
        },

	    openGate : function (e) {
            amplify.request("gate-open");
            e.preventDefault();
	    }
    });

    return HomeView;

});
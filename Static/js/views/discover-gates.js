define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'amplify'
], function ($, _, Backbone, JST, amplify, options) {

	var discoveryGateView = Backbone.View.extend({
        template: JST['js/templates/discover-gates.hbs'],

        tagName: 'div',

        id: 'gates-discovery',

        className: '',

        events: {
            'click #add-action': 'addGate'
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

	    addGate : function (e) {
            e.preventDefault();
	    }
    });

    return discoveryGateView;

});
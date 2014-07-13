/*global require*/
require.config({
	baseUrl: 'js/',
    shim: {
    	handlebars: {
	      exports: 'Handlebars',
	      init: function() {
	        this.Handlebars = Handlebars;
	        return this.Handlebars;
	      }
	    }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        handlebars: '../bower_components/handlebars/handlebars'
    }
});

require([
    'backbone',
    'routes/minnox'
], function (Backbone, Router) {
	"use strict";

	var router = new Router();
	router.initialize();

    Backbone.history.start({pushState : true});
});

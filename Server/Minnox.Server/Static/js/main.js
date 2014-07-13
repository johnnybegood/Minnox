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
	    },
        "amplify": {
            deps: ["jquery"],
            exports: "amplify"
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        handlebars: '../bower_components/handlebars/handlebars',
        amplify: '../bower_components/amplify/lib/amplify'
    }
});

require([
    'backbone',
    'routes/minnox',
    'commands'
], function (Backbone, Router, commands) {
	"use strict";

	var router = new Router();
	router.initialize();

    commands.register();

    Backbone.history.start({pushState : true});
});

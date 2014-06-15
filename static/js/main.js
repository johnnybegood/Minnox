/*global require*/
'use strict';

require.config({
	baseUrl: '/js',
    shim: {
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore'
    }
});

require([
    'backbone',
    'js/routes/minnox.js'
], function (Backbone, Router) {
	var router = new Router();
	router.initialize();

    Backbone.history.start({pushstate : true});
});

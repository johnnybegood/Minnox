define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    'use strict';

    var MinnoxRouter = Backbone.Router.extend({
    	initialize: function (){
	        // setup the ajax links for the html5 push navigation
	        $("body").on("click","a:not(a[data-bypass])",function(e){
	                // block the default link behavior
	                e.preventDefault();
	                // take the href of the link clicked
	                var href = $(this).attr("href");
	                // pass this link to Backbone
	                Backbone.history.navigate(href,true);
	        });
	    },
        routes: {
        	'':'dashboard',
        	'music':'music'
        },
        dashboard : function() {
        	$('.page-title').text("Dashboard (aka Home)");
        },
        music : function() {
        	$('.page-title').text("Music page");
        }

    });

    return MinnoxRouter;
});
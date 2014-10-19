define([
    'jquery',
    'underscore',
    'backbone',
    'jqueryui/dialog'
], function ($, _, Backbone, dialog) {
    
    var MinnoxRouter = Backbone.Router.extend({
    	initialize: function (){

	        // setup the ajax links for the html5 push navigation
	        $("body").on("click","a:not(a[data-bypass]):not(a[href^='/api'])",function(e){
                    // take the href of the link clicked
                    var href = $(this).attr("href");
	                // block the default link behavior
	                e.preventDefault();
	                
	                // pass this link to Backbone
	                Backbone.history.navigate(href,true);
	        });
	    },

	    currentView : {},
        currentPopup: {},        

        routes: {
        	'':'dashboard',
        	'music':'music',
            'gates': 'gates',
            'gates/add' : 'discoverGate'
        },
        dashboard : function() {
        	require(["views/home"], this.loadView);
        },

        music : function() {
        	require(["views/music"], this.loadView);
        },

        gates : function() {
            this.action("gates", "index");
        },

        discoverGate : function() {
            this.action("gates", "discover", this.loadPopup);
        },

        action : function (controllerName, actionName, handler) {
            var partial = _.partial(this.executeAction, actionName, handler || this.loadPartial);
            require(["controllers/" + controllerName], partial);
        },

        loadView : function (View, parameters) {
        	if(this.currentView) { this.currentView.remove(); }
        	this.currentView = new View();

        	$("#contentHolder").empty().append(this.currentView.render());

        },

        executeAction: function (actionName, handler, controller)
        {
            var me = this;
            var action = controller[actionName];

            if (!action && !_.isFunction(action))
            {
                throw "No " + actionName + " action on " + controller;
            }

            handler(action());
        },

        loadPopup: function (view)
        {
            var me = this;
            if(me.currentPopup) { me.currentPopup.remove(); }
            me.currentPopup = view;

            $("#popupHolder").empty().html(me.currentPopup.render()).dialog();
        },

        loadPartial: function (view)
        {
            var me = this;
            if(me.currentView) { me.currentView.remove(); }
            me.currentView = view;

            $("#contentHolder").empty().append(this.currentView.render());
        }


    });

    return MinnoxRouter;
});
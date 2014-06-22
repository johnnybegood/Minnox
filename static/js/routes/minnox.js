define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    
    var MinnoxRouter = Backbone.Router.extend({
    	initialize: function (){
    		_.bind(this.loadView, this);

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

	    currentView : {},

        routes: {
        	'':'dashboard',
        	'music':'music',
            'gates': 'gates'
        },
        dashboard : function() {
        	require(["views/home"], this.loadView);
        },

        music : function() {
        	require(["views/music"], this.loadView);
        },

        gates : function() {
            require(["controllers/gates"], this.loadController);
        },

        loadView : function (View, parameters) {
        	if(this.currentView) { this.currentView.remove(); }
        	this.currentView = new View();

        	$("#contentHolder").empty().append(this.currentView.render());

        },

        loadController: function (Controller)
        {
            var me = this;

            if(me.currentView) { me.currentView.remove(); }
            me.currentView = Controller.index();

            $("#contentHolder").empty().append(this.currentView.render());
        }

    });

    return MinnoxRouter;
});
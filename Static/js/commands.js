define([
    'amplify',
], function (amplify) {

	var commands = {
		register: function() {
			amplify.request.define("gate-open", "ajax", {
				url: "api/gate/open",
				dataType: "json",
				type: "GET"
			});
		}
	};

	return commands;
	
});
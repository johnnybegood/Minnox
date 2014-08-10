define(["squire"], function(Squire) {

	describe("Gate Controller", function () {

		describe("Discovery", function () {
			it("Fetches gate discovery collection", function (done) {
				
				//Arrange
				var fakeFetch = jasmine.createSpy('fetch');
				var collectionStub = function () { this.fetch = fakeFetch;  };
				
				var injector = new Squire();
				injector.mock("collections/gate-discovery", collectionStub)
						.require(["controllers/gates"], function (controller) {
							controller.discover();

							expect(fakeFetch).toHaveBeenCalled();	
							done();
						});
				
			});
		});
	});

});
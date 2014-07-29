define(['collections/gate-device'], function(GateDeviceCollection) {
	describe("Gate Device Collection", function () {

		it("should use the collection url", function () {
			var collection = new GateDeviceCollection();

			expect(collection.url).toEqual("/api/gate");

		});

	});
});
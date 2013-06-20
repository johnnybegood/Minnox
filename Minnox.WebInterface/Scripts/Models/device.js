var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var deviceModel = (function (_super) {
    __extends(deviceModel, _super);
    function deviceModel(options) {
        _super.call(this, options);
    }
    return deviceModel;
})(Backbone.Model);
var deviceCollection = (function (_super) {
    __extends(deviceCollection, _super);
    function deviceCollection() {
        _super.apply(this, arguments);

        this.model = deviceModel;
        this.url = '/api/devices';
    }
    return deviceCollection;
})(Backbone.Collection);
//@ sourceMappingURL=device.js.map

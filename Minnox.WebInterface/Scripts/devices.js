var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var pages;
(function (pages) {
    var collection = new deviceCollection();

    var devicePage = (function (_super) {
        __extends(devicePage, _super);
        function devicePage(model, options) {
            _super.call(this, options);

            collection.reset(model);

            this.listenTo(collection, "add", this.addOne);
        }
        devicePage.prototype.render = function () {
            alert("rendering");
        };

        devicePage.prototype.addOne = function (item) {
            var view = new pages.deviceView(item);
            $("#allDevices").append(view.render().el);
        };

        devicePage.prototype.getCollection = function () {
            return collection;
        };
        return devicePage;
    })(Backbone.View);
    pages.devicePage = devicePage;

    var deviceView = (function (_super) {
        __extends(deviceView, _super);
        function deviceView(model, options) {
            this.tagName = "tr";
            this.model = model;
            this.template = _.template($("#deviceTemplate").html());

            _super.call(this, options);
        }
        deviceView.prototype.render = function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        };
        return deviceView;
    })(Backbone.View);
    pages.deviceView = deviceView;
})(pages || (pages = {}));

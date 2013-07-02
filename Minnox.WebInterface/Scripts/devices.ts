/// <reference path="Models/device.ts" />
/// <reference path="backbone.d.ts" />

module pages {
    var collection = new deviceCollection();

    export class devicePage extends Backbone.View {
        constructor(model: device[], options?) {
            super(options);

            collection.reset(model);

            this.listenTo(collection, "add", this.addOne);
        }

        render() {
            alert("rendering");
        }

        addOne(item: deviceModel) {
            var view = new pages.deviceView(item);
            $("#allDevices").append(view.render().el);
        }

        getCollection() {
            return collection;
        }
    }

    export class deviceView extends Backbone.View {

        template: (data: any) => string;
        constructor(model: deviceModel, options?) {
            this.tagName = "tr";
            this.model = model;
            this.template = _.template($("#deviceTemplate").html());

            super(options);
        }

        render() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;

        }
    }
}
var minnox;


(function (minnox) {
    var deviceModel = Backbone.Model.extend({});

    var deviceCollection = Backbone.Collection.extend({
        model: deviceModel,
        url: '/api/devices'
    });

    var page = Backbone.View.extend({
        el: "#devicePage",
        events: {
            "click #add-device": "showAddDevice",
            "click #save-device": "saveDevice"
        },

        collection: new deviceCollection(),

        setupData: function (data) {
            this.collection.reset(data);
        },

        initialize: function () {
            this.listenTo(this.collection, "add", this.addOne);
            $("#device-editor").hide();
        },

        addOne: function (item) {
            var view = new minnox.devices.RowView({ model: item });
            $("#allDevices").append(view.render().el);
        },

        showAddDevice: function () {
            $("#device-editor").show();
            $("#add-device").hide();
        },

        saveDevice: function () {
            var item = { Name: $("#newDeviceName").val(), Type: $("#newDeviceType").val() };
            this.collection.create(item);
        }
    });

    var rowView = Backbone.View.extend({
        tagName: "tr",
        template: _.template($("#deviceTemplate").html()),
        model: deviceModel,

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    minnox.devices = {
        Page: page,
        RowView: rowView
    };
})(minnox || (minnox = {}));
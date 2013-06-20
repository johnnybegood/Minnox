/// <reference path="../backbone.d.ts" />

interface device {
    Name: string;
    Type: string;
}

class deviceModel extends Backbone.Model {
    constructor(options?: device) {
        super(options);
    }
}

class deviceCollection extends Backbone.Collection {
    model = deviceModel;
    url = '/api/devices';
}
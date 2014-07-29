/*global define*/

define([
    'underscore',
    'backbone',
    'models/music-shortcut'
], function (_, Backbone, MusicShortcutModel) {

    var MusicShortcutCollection = Backbone.Collection.extend({
        model: MusicShortcutModel
    });

    return MusicShortcutCollection;
});

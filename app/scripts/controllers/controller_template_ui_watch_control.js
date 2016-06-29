/*

*/
App.UiWatchControlTemplateController = Ember.ObjectController.extend({
    needs: ['editor'],

    imageSource: function() {
        var watchPlatform = this.get('controllers.editor.wearable.watchPlatform');
        return 'img/ui_watch_controls/' + watchPlatform + '/' + this.get('model.nameImg');
    }.property('controllers.editor.wearable.watchPlatform')

});

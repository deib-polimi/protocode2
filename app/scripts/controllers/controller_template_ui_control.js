/*

*/
App.UiControlTemplateController = Ember.ObjectController.extend({
    needs: ['editor'],

    imageSource: function() {
        var platform = this.get('controllers.editor.device.platform');
        return 'img/ui_controls/' + platform + '/' + this.get('model.nameImg');
    }.property('controllers.editor.device.platform')

});

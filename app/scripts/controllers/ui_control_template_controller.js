App.UiControlTemplateController = Ember.ObjectController.extend({
  needs: ['editor'],

  imageSource: function() {
    return 'img/ui_controls/' + this.get('controllers.editor.device.platform') + '/' + this.get('model.nameImg');
  }.property('controllers.editor.device.platform')
});

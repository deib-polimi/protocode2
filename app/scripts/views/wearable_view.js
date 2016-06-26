App.WearableView = Ember.View.extend({
  tagName: 'div',
  classNames: ['wearable-view'],
  classNameBindings: ['platform', 'deviceModel'],
  templateName: 'views/wearable_view',

  platform: function () {
    return this.get('controller.controllers.editor.wearable.platform');
  }.property('controller.controllers.editor.wearable'),

  deviceModel: function() {
    return this.get('controller.controllers.editor.wearable.name');
  }.property('controller.controllers.editor.wearable'),

});

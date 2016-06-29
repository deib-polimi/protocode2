App.WearableView = Ember.View.extend({
  tagName: 'div',
  attributeBindings: ['style'],
  classNames: ['wearable-view'],
  classNameBindings: ['watchPlatform', 'wearableModel'],
  templateName: 'views/wearable_view',

  watchPlatform: function () {
    return this.get('controller.controllers.editor.wearable.watchPlatform');
  }.property('controller.controllers.editor.wearable'),

  wearableModel: function() {
    return this.get('controller.controllers.editor.wearable.name');
  }.property('controller.controllers.editor.wearable'),

  zoomLevelStyle: function() {
    var zoomLevel = this.get('context.zoomLevel');
    return 'transform: scale(' + zoomLevel + ', '  + zoomLevel + ');' +
      '-webkit-transform: scale(' + zoomLevel + ', '  + zoomLevel + ');';
  }.property('context.zoomLevel'),

  style: function() {
    return this.get('zoomLevelStyle');
  }.property('zoomLevelStyle')

});

App.UiWatchLabelView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-watch-label', 'expanded'],
  classNameBindings: ['controller.controllers.editor.wearable.watchPlatform', 'context.textAlign'],
  templateName: 'views/ui_watch_label_view',

});

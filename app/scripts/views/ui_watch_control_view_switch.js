App.UiWatchSwitchView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-watch-switch', 'expanded'],
  classNameBindings: ['controller.controllers.editor.smartwatch.platform'],
  templateName: 'views/ui_watch_control_view_switch',

});

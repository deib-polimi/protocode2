App.UiTimepickerView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-timepicker', 'expanded'],
  classNameBindings: ['controller.controllers.editor.device.platform'],
  templateName: 'views/ui_timepicker_view'

});

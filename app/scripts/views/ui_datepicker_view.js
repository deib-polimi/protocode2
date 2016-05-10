App.UiDatepickerView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-datepicker', 'expanded'],
  classNameBindings: ['controller.controllers.editor.device.platform'],
  templateName: 'views/ui_datepicker_view'

});

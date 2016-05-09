App.UiSliderView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-slider', 'expanded'],
  classNameBindings: ['controller.controllers.editor.device.platform'],
  templateName: 'views/ui_slider_view'

});

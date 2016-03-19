App.UiButtonView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-button', 'expanded'],
  classNameBindings: ['controller.controllers.editor.device.platform'],
  templateName: 'views/ui_button_view',

  attributeBindings: ['style'],

  style: function () {
  	return 'background-color: ' + this.get('context.backgroundColor');
  }.property('context.backgroundColor')

});
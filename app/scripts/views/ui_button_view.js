App.UiButtonView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-button', 'expanded'],
  classNameBindings: ['controller.controllers.editor.device.platform'],
  templateName: 'views/ui_button_view',

  attributeBindings: ['style'],

  style: function () {
  	var style = ""
  	style += 'background-color: ' + this.get('context.backgroundColor') + ";";
  	style += 'border-radius: ' + this.get('context.borderRadius') + "px;";
  	return style;
  }.property(
  	'context.backgroundColor',
  	'context.borderRadius'
  	)

});
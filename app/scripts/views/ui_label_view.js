App.UiLabelView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-label', 'expanded'],
  classNameBindings: ['controller.controllers.editor.device.platform', 'context.textAlign'],
  templateName: 'views/ui_label_view',

  attributeBindings: ['style'],

  style: function () {
  	var style = ""
  	style += 'color: ' + this.get('context.textColor') + ";";
  	return style;
  }.property(
    'context.textColor'
  	)

});
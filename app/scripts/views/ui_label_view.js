App.UiLabelView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-label', 'expanded'],
  classNameBindings: ['controller.controllers.editor.device.platform', 'context.textAlign'],
  templateName: 'views/ui_label_view',

  attributeBindings: ['style'],

  device: Ember.computed.alias('controller.controllers.editor.device'),

  style: function () {
    
    var cssHeight = this.get('device.cssHeight');
    var screenHeight = this.get('device.screenHeight');
    var coefficient = cssHeight / screenHeight;

  	var style = ""
    style += 'color: '      + this.get('context.textColor') + ";";
    style += 'font-size: '  + this.get('context.textSize')*coefficient + "px;";
  	return style;
  }.property(
    'context.textColor',
    'context.textSize',
    'device'
  )

});
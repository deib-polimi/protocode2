App.UiEditTextView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-edit-text', 'expanded'],
  classNameBindings: ['controller.controllers.editor.smartphone.platform'],
  templateName: 'views/ui_edit_text_view',

  attributeBindings: ['style'],

  smartphone: Ember.computed.alias('controller.controllers.editor.smartphone'),

  style: function () {

    var cssHeight = this.get('smartphone.cssHeight');
    var screenHeight = this.get('smartphone.screenHeight');
    var coefficient = cssHeight / screenHeight;

  	var style = ""
    style += 'color: '      + this.get('context.textColor') + ";";
    style += 'font-size: '  + this.get('context.textSize')*coefficient + "px;";
  	return style;
  }.property(
    'context.textColor',
    'context.textSize',
    'smartphone'
  )

});

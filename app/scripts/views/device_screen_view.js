App.DeviceScreenView = Ember.View.extend(App.UiDroppable, {
  tagName: 'div',
  attributeBindings: ['style'],
  classNames: ['device-screen-view'],
  templateName: 'views/device_screen_view',

  style: function() {
    var style = ""
    style += 'background-color: ' + this.get('context.backgroundColor') + ";";
  	return style;
  }.property(
  	'context.backgroundColor'
  )

});

App.Timepicker = App.UiControl.extend({
  name:       DS.attr('string', {defaultValue: 'Timepicker'}),

  width:      DS.attr('number', {defaultValue: 400}),
  height:     DS.attr('number', {defaultValue: 450}),

  xmlName:    'timepickers',

  toXml: function(xmlDoc) {
    var timepicker = xmlDoc.createElement(this.get('xmlName'));
    this.decorateXml(timepicker);
    return timepicker;
  }

});

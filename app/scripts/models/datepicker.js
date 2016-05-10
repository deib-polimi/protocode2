App.Datepicker = App.UiControl.extend({
  name:       DS.attr('string', {defaultValue: 'Datepicker'}),

  width:      DS.attr('number', {defaultValue: 400}),
  height:     DS.attr('number', {defaultValue: 450}),

  xmlName:    'datepickers',

  toXml: function(xmlDoc) {
    var datepicker = xmlDoc.createElement(this.get('xmlName'));
    this.decorateXml(datepicker);
    return datepicker;
  }

});

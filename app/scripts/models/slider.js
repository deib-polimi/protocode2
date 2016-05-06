App.Slider = App.UiControl.extend({
  name:       DS.attr('string', {defaultValue: 'Slider'}),

  width:      DS.attr('number', {defaultValue: 88}),
  height:     DS.attr('number', {defaultValue: 36}),

  xmlName:    'slider',

  toXml: function(xmlDoc) {
    var slider = xmlDoc.createElement(this.get('xmlName'));
    this.decorateXml(slider);
    return slider;
  }

});

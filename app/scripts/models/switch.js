App.Switch = App.UiControl.extend({
  name:       DS.attr('string', {defaultValue: 'Switch'}),

  width:      DS.attr('number', {defaultValue: 88}),
  height:     DS.attr('number', {defaultValue: 36}),

  xmlName:    'switches',

  toXml: function(xmlDoc) {
    var _switch = xmlDoc.createElement(this.get('xmlName'));
    this.decorateXml(_switch);
    return _switch;
  }

});

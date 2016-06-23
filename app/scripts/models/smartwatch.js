App.Smartwatch = DS.Model.extend({

  voiceMessage : DS.attr('boolean', {defaultValue: false}),
  xmlName : "smartwatch",

  toXml: function(xmlDoc) {
    var elem = xmlDoc.createElement(this.get('xmlName'));
    //this.decorateXml(elem);
    elem.setAttribute('voiceMessage', this.get('voiceMessage'));
    return elem;
  }

})

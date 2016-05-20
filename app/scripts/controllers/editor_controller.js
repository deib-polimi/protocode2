App.EditorController = Ember.ObjectController.extend(App.Saveable, {

  actions: {
    generateAppModel: function() {
      this.get('model').toXml().then(function (model) {
        var xmlString = '<?xml version="1.0" encoding="UTF-8"?>\n' + new XMLSerializer().serializeToString(model.documentElement);
        if(navigator.userAgent.toLowerCase().indexOf("safari") > -1) {
          window.alert("Safari browser has been detected!\nWe strongly reccomend you to use another browser to download the model automatically.\n\nManual download : \nPlease type ⌘+S to save the page as\nExport As: protocode.xmi\nFormat: Page Source");
          var blob = new Blob(
            [vkbeautify.xml(xmlString)],
            {type: "text/xml;charset=ASCII"}
          );
        } else {
          var blob = new Blob(
            [vkbeautify.xml(xmlString)],
            {type: "application/xml;charset=ASCII"}
          );
        }
        saveAs(blob, "protocode.xmi");
      });

    }

  }

});

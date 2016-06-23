App.ViewControllersRoute = Ember.Route.extend({
  init: function() {
    this._super();
    this.generateController('uiControlTemplates', []).set('model', this.store.find('uiControlTemplate'));
  },

  setupController: function(controller, model) {

    controller.set('model', model);

    //resetting smartwatch checkboxes
    var voiceMessage = controller.get('voiceMessage');
    this.store.find('smartwatch').then(function(smartwatches){
      smartwatches.forEach(function(smartwatch){
        if(voiceMessage != smartwatch.get('voiceMessage')) {
          console.log("Resetting voiceMessage checkbox");
          controller.set('voiceMessage',smartwatch.get('voiceMessage'));
        }
      });
    });
  },

  model: function () {
      return this.store.find('application', 'newAppId').then(function(app) {
        return app.get('viewControllers');
      });
  }
});

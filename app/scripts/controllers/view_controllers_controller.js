App.ViewControllersController = Ember.ArrayController.extend({
  isCreating: false,
  newNameViewController: 'newView',
  voiceMessage: false,

  needs: ['uiControlTemplates', 'editor'],

  voiceMessageObserver: function() {
    var self = this;

    console.log("voiceMessage property has changed to : "+this.get('voiceMessage'));

    this.store.find('smartwatch').then(function(smartwatches){
      smartwatches.forEach(function(smartwatch){
        var vm = self.get('voiceMessage');
        smartwatch.set('voiceMessage', vm);
        smartwatch.save();
      });
    });

  }.observes(
    'voiceMessage'
  ),

  actions: {
    setCreating: function(value) {
      this.set('isCreating', value);
    },

  	createViewController: function() {
  		var name = this.get('newNameViewController');
      var app = this.get('controllers.editor.model');

      if (!name.trim()) { return; }

      // Application model is in editor.model
      this.store.createRecord('viewController', {
        name: name,
        application: app
      }).save().then(function (viewController) {
        app.get('viewControllers').addObject(viewController);
        app.save();
      });

      this.set('newNameViewController', 'newView');
      this.set('isCreating', false);

  	},

  }

});

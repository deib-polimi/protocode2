App.ViewControllerRoute = Ember.Route.extend({
  zIndex: 5,
  
  actions: {
    increaseZoom: function() {
      this.set('controller.zoomLevel', Math.round((this.get('controller.zoomLevel') + 0.2) * 100) / 100);
    },
    decreaseZoom: function() {
      this.set('controller.zoomLevel', Math.round((this.get('controller.zoomLevel') - 0.2) * 100) / 100);
    },
    addUiControl: function(controlType, receiver) {
      console.log('Receiver of drop event: ' + receiver.get('context.name'));
      console.log('Type of receiver: ' + receiver.get('context').constructor.toString());

      if(controlType == 'photocameraController') {
        alert('If you add more than one Photocamera Controller\nIn the same ViewControl, they will all be ignored\nExcept for the very first Photocamera Controller\n')
      } else if(controlType == 'videocameraController') {
        alert('If you add more than one Videocamera Controller\nIn the same ViewControl, they will all be ignored\nExcept for the very first Videocamera Controller\n')
      } else if(controlType == 'audioRecorder') {
        alert('If you add more than one Audio Recorder\nIn the same ViewControl, they will all be ignored\nExcept for the very first Audio Recorder\n')
      }

      var uiControl = this.store.createRecord(controlType, {
        viewController: this.get('controller.model')
      });

      this.get('controller.model').save();

      if (receiver.get('context').constructor.toString() == 'App.Container') {
        uiControl.set('parentContainer', receiver.get('context'));
        receiver.get('context').save();
      }

      uiControl.save();
      
    }
  }
});

App.ApplicationRoute = Ember.Route.extend({
  model: function () {
    return this.store.findAll('application');
  },

  actions: {

    deleteApp: function () {
      var self = this;

      var models = [
        'application',
        'container',
        'device',
        'menu',
        'menuItem',
        'platform',
        'uiControlTemplate'
      ];

      models.map(function (model) {
        Ember.run.once(self, function () {
          self.store.findAll(model).then(function (array) {
            array.forEach(function (data) {
              Ember.run.once(self, function () {
                data.deleteRecord();
                data.save();
              });
            });
          });
        });
      });

      this.transitionTo('/');

    },

    createApp: function () {
      var self = this;

      /*
      this.store.createRecord('device', {
        name: 'iPhone5s',
        label: 'iPhone 5s',
        platform: 'ios',
        //Aggancio top
        viewTop: 62,
        //Aggancio bottom
        viewBottom: 568,
        //Dimensioni in dp
        screenWidth: 320,
        screenHeight: 568,
        //Dimensioni nel css - padding
        cssWidth: 312,
        cssHeight: 556
      }).save().then(function (device) {
        self.store.createRecord('menu').save().then(
          function (newMenu) {
            self.store.createRecord('application', {
              id: 'newAppId'
            }).save().then(function (app) {
              app.set('device', device);
              app.set('menu', newMenu);
              app.save();
              newMenu.save();
              device.save();
            });

          });
      });
      */
      this.store.createRecord('device', {
        name: 'iPhone6Plus',
        label: 'iPhone 6 Plus',
        platform: 'ios',
        //Altezza status bar in points
        viewTop: 64,
        //Altezza schermo in points
        viewBottom: 736,
        //Dimensioni in points
        screenWidth: 414,
        screenHeight: 736,
        //Dimensione - padding = dimensione schermo (vedi css)
        cssWidth: 414,
        cssHeight: 736
      }).save().then(function (device) {
        self.store.createRecord('menu').save().then(
          function (newMenu) {
            self.store.createRecord('application', {
              id: 'newAppId'
            }).save().then(function (app) {
              app.set('device', device);
              app.set('menu', newMenu);
              app.save();
              newMenu.save();
              device.save();
            });

          });
      });

      this.store.createRecord('device', {
        name: 'Nexus6P',
        label: 'Nexus 6P',
        platform: 'android',
        //Altezza status bar(30) + toolbar(64) in dp
        viewTop: 93,
        //Altezza schermo (731) - altezza command bar(55) in dp
        viewBottom: 675,
        //Dimensioni in dp
        screenWidth: 411,
        screenHeight: 731,
        //Dimensioni nel css - padding
        cssWidth: 411,
        cssHeight: 731
      }).save();


      /*this.store.createRecord('uiControlTemplate', {
        label: 'Container View',
        nameImg: 'container.png',
        type: 'container'
      }).save();*/
      this.store.createRecord('uiControlTemplate', {
        label: 'Button',
        nameImg: 'button.png',
        type: 'button'
      }).save();
      this.store.createRecord('uiControlTemplate', {
        label: 'Label',
        nameImg: 'label.png',
        type: 'label'
      }).save();
      this.store.createRecord('uiControlTemplate', {
        label: 'Edit Text',
        nameImg: 'edittext.png',
        type: 'editText'
      }).save();
      this.store.createRecord('uiControlTemplate', {
        label: 'Switch',
        nameImg: 'switch.png',
        type: 'switch'
      }).save();
      this.store.createRecord('uiControlTemplate', {
        label: 'Slider',
        nameImg: 'slider.png',
        type: 'slider'
      }).save();
      this.store.createRecord('uiControlTemplate', {
        label: 'Web View',
        nameImg: 'webview.png',
        type: 'webView'
      }).save();
      this.store.createRecord('uiControlTemplate', {
        label: 'Image View',
        nameImg: 'imageview.png',
        type: 'imageView'
      }).save();
      this.store.createRecord('uiControlTemplate', {
        label: 'Video View',
        nameImg: 'videoview.png',
        type: 'videoView'
      }).save();
      this.store.createRecord('uiControlTemplate', {
        label: 'Audio Player',
        nameImg: 'audioplayer.png',
        type: 'audioPlayer'
      }).save();
      this.store.createRecord('uiControlTemplate', {
        label: 'List View',
        nameImg: 'listview.png',
        type: 'listView'
      }).save();
      this.store.createRecord('uiControlTemplate', {
        label: 'Grid View',
        nameImg: 'gridview.png',
        type: 'gridView'
      }).save();
      this.store.createRecord('uiControlTemplate', {
        label: 'Photocamera Controller',
        nameImg: 'photocameracontroller.png',
        type: 'photocameraController'
      }).save();
      this.store.createRecord('uiControlTemplate', {
        label: 'Videocamera Controller',
        nameImg: 'videocameracontroller.png',
        type: 'videocameraController'
      }).save();
      this.store.createRecord('uiControlTemplate', {
        label: 'Audio Recorder',
        nameImg: 'audiorecorder.png',
        type: 'audioRecorder'
      }).save();
      this.store.createRecord('uiControlTemplate', {
        label: 'Map',
        nameImg: 'map.png',
        type: 'map'
      }).save();


    }
  }
});

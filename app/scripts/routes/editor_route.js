App.EditorRoute = Ember.Route.extend({

    setupController: function(controller, model) {
        this._super(controller, model);
        controller.set('model', model.application);
        controller.set('devices', model.devices);
        controller.set('wearables', model.wearables);
        controller.set('deviceModel', model.devices.findBy('id', this.get('deviceId')));
        controller.set('wearableModel', model.wearables.findBy('id', this.get('wearableId')));
    },

    model: function() {
        return Ember.RSVP.hash({
            application: this.store.find('application').then(function(dataArray) {
                return dataArray.objectAt(0);
            }),

            viewControllers: this.store.find('viewController'),
            watchControllers: this.store.find('watchController'),

            devices: this.store.find('device'),
            wearables: this.store.find('wearable'),

            menu: this.store.find('menu'),
            menuItems: this.store.find('menuItem'),

            listViewCells: this.store.find('listViewCell'),
            gridViewCells: this.store.find('gridViewCell'),

            asyncTasks: this.store.find('asyncTask'),
            alertDialogs: this.store.find('alertDialog'),
            progressDialogs: this.store.find('progressDialog'),

            clickListeners: this.store.find('clickListener'),
            watchClickListeners: this.store.find('watchClickListener'),
            navigations: this.store.find('navigation'),
            watchNavigations: this.store.find('watchNavigation'),
            sourceTypes: this.store.find('sourceType'),

            // UiControls
            audioPlayers: this.store.find('audioPlayer'),
            audioRecorders: this.store.find('audioRecorder'),
            buttons: this.store.find('button'),
            cards: this.store.find('card'),
            editTexts: this.store.find('editText'),
            gridViews: this.store.find('gridView'),
            imageViews: this.store.find('imageView'),
            labels: this.store.find('label'),
            listViews: this.store.find('listView'),
            maps: this.store.find('map'),
            datepickers: this.store.find('datepicker'),
            timepickers: this.store.find('timepicker'),
            photocameraControllers: this.store.find('photocameraController'),
            sliders: this.store.find('slider'),
            switches: this.store.find('switch'),
            videoViews: this.store.find('videoView'),
            videocameraControllers: this.store.find('videocameraController'),
            webViews: this.store.find('webView'),

            // UiWatchControls
            watchButtons: this.store.find('watchButton'),
            watchLabels: this.store.find('watchLabel'),
            watchVoiceMessages: this.store.find('watchVoiceMessage'),
        });
    }

});

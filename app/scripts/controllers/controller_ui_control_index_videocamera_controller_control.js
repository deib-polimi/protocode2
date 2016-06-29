/*
  templates/control_videocamera_controller/index.hbs
*/
App.ControlVideocameraControllerIndexController = App.UiControlController.extend({

    allowedVideoViews: function() {
        return this.get('videoViews').filterBy('sourceType.type', 'hardwareFile');
    }.property('videoViews.@each'),

    normalBackType: function(key, value) {
        return this.backgroundType(key, value, 'normal');
    }.property('model.backgroundType'),

    iconBackType: function(key, value) {
        return this.backgroundType(key, value, 'icon');
    }.property('model.backgroundType'),

    backgroundType: function(key, value, type) {
        // setter
        if (value != undefined) {
            this.set('model.backgroundType', type);
            this.get('model').save();
        }

        // getter
        return this.get('model.backgroundType') == type;
    },

    actions: {
        acceptChanges: function() {
            this._super();

            if (this.get('model.videoView')) {
                this.get('model.videoView').save();
            }
        }
    }

});

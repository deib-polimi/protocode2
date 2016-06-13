App.UiAudioRecorderView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-audio-recorder-view', 'control-button', 'expanded'],
  classNameBindings: ['controller.controllers.editor.device.platform'],
  templateName: 'views/ui_audio_recorder_view',
  attributeBindings: ['style'],

  style: function() {
    var isAndroid = this.get('controller.controllers.editor.device.platform') == 'android';
    var parentWidth = this.get("parentView.context.width");
    var parentHeight = this.get("parentView.context.height");

    style = '';

    if(isAndroid) {
      style += 'width: ' + (parentWidth - 8) + "px;";
      style += 'height: ' + (parentHeight - 16) + "px;";
      style += 'margin: 8px 4px; ';  
    }

    return style;
  }.property(
    'context.width',
    'context.height',
    'controller.controllers.editor.device.platform'
  )
  
});

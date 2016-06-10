App.UiAudioRecorderView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-audio-recorder-view', 'control-button', 'expanded'],
  classNameBindings: ['controller.controllers.editor.device.platform'],
  templateName: 'views/ui_audio_recorder_view',
  attributeBindings: ['style'],

  style: function() {
    var screenColor = this.get("parentView.parentView.context.backgroundColor");
    style = "border-color : "+screenColor;
    return style;
  }.property(
    'parentView.parentView.context.backgroundColor'
  )
});

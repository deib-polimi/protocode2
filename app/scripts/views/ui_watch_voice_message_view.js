App.UiWatchVoiceMessageView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-watch-voice-message', 'expanded'],
  classNameBindings: ['controller.controllers.editor.wearable.watchPlatform'],
  templateName: 'views/ui_watch_voice_message_view',

  attributeBindings: ['style'],

  style: function() {
    var isAndroidWear = this.get('controller.controllers.editor.wearable.watchPlatform') == 'androidwear';
    var parentWidth = this.get("parentView.context.computedWidth");
    var parentHeight = this.get("parentView.context.computedHeight");
    var style = ""

    if(isAndroidWear) {
      style += 'width: ' + (parentWidth - 8) + "px;";
      style += 'height: ' + (parentHeight - 16) + "px;";
      style += 'margin: 8px 4px; ';
    } else {
      style += 'width: ' + (parentWidth - 4) + "px;";
      style += 'height: ' + (parentHeight - 4) + "px;";
      style += 'margin: 2px 2px; ';
    }

    return style;
  }.property(
    'context.computedWidth',
    'context.computedHeight',
    'controller.controllers.editor.wearable.watchPlatform'
  )

});

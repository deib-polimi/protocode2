App.UiVideocameraControllerView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-videocamera-controller-view', 'control-button', 'expanded'],
  classNameBindings: ['controller.controllers.editor.device.platform'],
  templateName: 'views/ui_videocamera_controller_view',
  attributeBindings: ['style'],

  style: function() {
    var screenColor = this.get("parentView.parentView.context.backgroundColor");
    style = "border-color : "+screenColor;
    return style;
  }.property(
    'parentView.parentView.context.backgroundColor'
  )
  
});

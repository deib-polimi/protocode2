App.UiImageViewView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-image-view', 'expanded'],
  classNameBindings: ['controller.controllers.editor.smartphone.platform'],
  templateName: 'views/ui_image_view_view'
});
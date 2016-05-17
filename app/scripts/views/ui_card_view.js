App.UiCardView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-card', 'expanded'],
  classNameBindings: ['controller.controllers.editor.device.platform'],
  templateName: 'views/ui_card_view'
});

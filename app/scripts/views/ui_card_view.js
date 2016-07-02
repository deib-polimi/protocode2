App.UiCardView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-card', 'expanded'],
  classNameBindings: ['controller.controllers.editor.smartphone.platform'],
  templateName: 'views/ui_card_view'

});

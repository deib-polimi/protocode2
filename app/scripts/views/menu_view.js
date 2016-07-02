App.MenuView = Ember.View.extend({
  tagName: 'div',
  classNames: ['app-menu'],
  classNameBindings: ['controller.controllers.editor.smartphone.platform'],
  templateName: 'views/menu_view'

});

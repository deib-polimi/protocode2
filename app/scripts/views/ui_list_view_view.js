App.UiListViewView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-list-view', 'expanded'],
  classNameBindings: ['controller.controllers.editor.smartphone.platform'],
  templateName: 'views/ui_list_view_view'

});
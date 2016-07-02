App.UiMapView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-map', 'expanded'],
  classNameBindings: ['controller.controllers.editor.smartphone.platform'],
  templateName: 'views/ui_map_view'

});
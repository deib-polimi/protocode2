App.MenuView = Ember.View.extend({
  tagName: 'div',
  classNames: ['app-menu'],
  classNameBindings: ['controller.controllers.editor.smartphone.platform'],
  templateName: 'views/menu_view',

  attributeBindings: ['style'],

  style: function() {
    var isAndroid = this.get('controller.controllers.editor.smartphone.platform') == 'android';
    var isLauncher = this.get('context.launcher') == true;
    style = "";

    if(isAndroid && !isLauncher) {
        style += "display:none";
    }

    return style;
  }.property(
    'controller.controllers.editor.smartphone.platform',
    'context.launcher'
  )

});

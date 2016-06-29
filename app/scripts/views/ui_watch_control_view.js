App.UiWatchControlView = Ember.View.extend(App.UiWatchMoveable, {
  templateName: 'views/ui_watch_control_view',
  classNames: ['ui-watch-control'],
  classNameBindings: ['active'],
  attributeBindings: ['style'],

  wearable: Ember.computed.alias('controller.controllers.editor.wearable'),

  uiWatchControlType: function () {
    var controlType = this.get('context').constructor.toString();
    console.log('Choose view for: ' + controlType);

    switch (controlType) {

      case ('App.WatchButton'):
        return App.UiWatchButtonView;
        break;

      case ('App.WatchLabel'):
        return App.UiWatchLabelView;
        break;

      case ('App.WatchVoiceMessage'):
        return App.UiWatchVoiceMessageView;
        break;

    }
  }.property(),

  alignParentTop: function() {
    return this.get('context.alignParentTop');
  }.property('context.alignParentTop'),

  alignParentBottom: function() {
    return this.get('context.alignParentBottom');
  }.property('context.alignParentBottom'),

  alignParentStart: function() {
    return this.get('context.alignParentStart');
  }.property('context.alignParentStart'),

  alignParentEnd: function() {
    return this.get('context.alignParentEnd');
  }.property('context.alignParentEnd'),

  top: function() {
    return this.computeVerticalAxis(this.get('context.top'));
  }.property('context.top', 'wearable'),

  bottom: function() {
    return this.computeVerticalAxis(this.get('context.bottom'));
  }.property('context.bottom', 'wearable'),

  start: function() {
    return this.computeHorizontalAxis(this.get('context.start'));
  }.property('context.start', 'wearable'),

  end: function() {
    return this.computeHorizontalAxis(this.get('context.end'));
  }.property('context.end', 'wearable'),

  /**** Margin ****/
  marginTop: function() {
    return this.computeVerticalAxis(this.get('context.marginTop'));
  }.property('context.marginTop', 'wearable'),

  marginBottom: function() {
    return this.computeVerticalAxis(this.get('context.marginBottom'));
  }.property('context.marginBottom', 'wearable'),

  marginStart: function() {
    return this.computeHorizontalAxis(this.get('context.marginStart'));
  }.property('context.marginStart', 'wearable'),

  marginEnd: function() {
    return this.computeHorizontalAxis(this.get('context.marginEnd'));
  }.property('context.marginEnd', 'wearable'),

  /**** Padding ****/
  paddingTop: function() {
    return this.computeVerticalAxis(this.get('context.paddingTop'));
  }.property('context.paddingTop', 'wearable'),

  paddingBottom: function() {
    return this.computeVerticalAxis(this.get('context.paddingBottom'));
  }.property('context.paddingBottom', 'wearable'),

  paddingStart: function() {
    return this.computeHorizontalAxis(this.get('context.paddingStart'));
  }.property('context.paddingStart', 'wearable'),

  paddingEnd: function() {
    return this.computeHorizontalAxis(this.get('context.paddingEnd'));
  }.property('context.paddingEnd', 'wearable'),

  computedWidth: function() {
    return this.computeHorizontalAxis(this.get('context.computedWidth'));
  }.property('context.computedWidth', 'wearable'),

  computedHeight: function() {
    return this.computeVerticalAxis(this.get('context.computedHeight'));
  }.property('context.computedHeight', 'wearable'),

  style: function() {
    var result = '';

    result += 'top: ' + this.get('top') + 'px; ';
    result += 'left: ' + this.get('start') + 'px; ';

    result += 'height: ' + this.get('computedHeight') + 'px;';
    result += 'width: ' + this.get('computedWidth') + 'px;';

    result += 'margin-top: ' + this.get('marginTop') + 'px;';
    result += 'margin-bottom: ' + this.get('marginBottom') + 'px;';
    result += 'margin-left: ' + this.get('marginStart') + 'px;';
    result += 'margin-right: ' + this.get('marginEnd') + 'px;';

    result += 'padding-top: ' + this.get('paddingTop') + 'px;';
    result += 'padding-bottom: ' + this.get('paddingBottom') + 'px;';
    result += 'padding-left: ' + this.get('paddingStart') + 'px;';
    result += 'padding-right: ' + this.get('paddingEnd') + 'px;';

    return result;
  }.property(
    'start',
    'top',
    'computedWidth',
    'computedHeight',
    'marginTop',
    'marginBottom',
    'marginStart',
    'marginEnd',
    'paddingTop',
    'paddingBottom',
    'paddingStart',
    'paddingEnd'
    ),

  computeVerticalAxis: function(value) {
    return value / this.get('wearable.screenHeight') * this.get('wearable.cssHeight');
  },

  computeHorizontalAxis: function(value) {
    return value / this.get('wearable.screenWidth') * this.get('wearable.cssWidth');
  }

});

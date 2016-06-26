App.Wearable = DS.Model.extend({
  name: DS.attr('string'),
  label: DS.attr('string'),
  platform: DS.attr('string'),
  screenWidth: DS.attr('number'),
  screenHeight: DS.attr('number'),
  cssWidth: DS.attr('number'),
  cssHeight: DS.attr('number')
});
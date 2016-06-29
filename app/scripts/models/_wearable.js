App.Wearable = DS.Model.extend({
  name:         DS.attr('string'),
  label:        DS.attr('string'),
  watchPlatform:DS.attr('string'),
  viewTop:      DS.attr('number'),
  viewBottom:   DS.attr('number'),
  screenWidth:  DS.attr('number'),
  screenHeight: DS.attr('number'),
  cssWidth:     DS.attr('number'),
  cssHeight:    DS.attr('number')
});

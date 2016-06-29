App.WatchPlatform = DS.Model.extend({
    name: DS.attr('string'),
    label: DS.attr('string'),
    wearables: DS.hasMany('wearable')
});

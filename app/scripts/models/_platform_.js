App.Platform = DS.Model.extend({
    name: DS.attr('string'),
    label: DS.attr('string'),
    devices: DS.hasMany('device')
});

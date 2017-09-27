import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  pieces: DS.hasMany('piece'),
  show: DS.belongsTo('show'),
});

import DS from 'ember-data';

export default DS.Model.extend({
  show: DS.belongsTo('show'),
  url: DS.attr('string'),
  title: DS.attr('string'),
  piecetitle: DS.attr('string'),
  artists: DS.attr('string'),
  size: DS.attr('string')
});

import DS from 'ember-data';

export default DS.Model.extend({
  show: DS.belongsTo('show'),
  name: DS.attr('string'),
  url: DS.attr('string'),
  alt: DS.attr('string')
});

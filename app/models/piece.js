import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  show: DS.belongsTo('show'),
  person: DS.belongsTo('person')
});

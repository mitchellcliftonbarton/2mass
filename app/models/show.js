import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  date: DS.attr('string'),
  artists: DS.attr('string'),
  link: DS.attr('string')
});

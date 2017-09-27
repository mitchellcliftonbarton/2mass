import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  when: DS.attr('string'),
  link: DS.attr('string'),
  status: DS.attr('string'),
  text: DS.attr('string'),
  images: DS.hasMany('image', { async: true }),
  pieces: DS.hasMany('piece'),
  people: DS.hasMany('person')
});

import Ember from 'ember';

export default Ember.Controller.extend({
  allShows: Ember.computed(function() {
    return this.get('store').findAll('show')
  })
});

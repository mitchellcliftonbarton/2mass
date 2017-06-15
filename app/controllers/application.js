import Ember from 'ember';

export default Ember.Controller.extend({
  showPage: Ember.computed('currentRouteName', function() {
    return this.get('currentRouteName') === 'zone-of-avoidance' | this.get('currentRouteName') === 'geminii'
  })
});

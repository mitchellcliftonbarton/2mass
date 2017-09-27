import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  isInitialLoad: true,
  randomLanding: true,

  showPage: Ember.computed('currentRouteName', function() {
    return this.get('currentRouteName') === 'zone-of-avoidance' |
           this.get('currentRouteName') === 'geminii' |
           this.get('currentRouteName') == 'friendship' |
           this.get('currentRouteName') === 'about'
  }),

  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});

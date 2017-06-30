import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  showPage: Ember.computed('currentRouteName', function() {
    return this.get('currentRouteName') === 'zone-of-avoidance' | this.get('currentRouteName') === 'geminii' | this.get('currentRouteName') == 'friendship'
  }),

  actions: {
    logout() {
      this.get('session').invalidate();
    }
  },

  openAlert: function() {
    console.log('this is kind of like dom ready');
  }.on('init')
});

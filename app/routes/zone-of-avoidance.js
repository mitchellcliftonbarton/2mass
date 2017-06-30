import Ember from 'ember';

export default Ember.Route.extend({
    showPage: true,
    templateName: 'show-page',
    model() {
      return this.get('store').findRecord('show', 'zone-of-avoidance');
      // return this.get('store').findAll('image');
    }
});

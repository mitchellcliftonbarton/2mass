import Ember from 'ember';

export default Ember.Route.extend({
    showPage: true,
    templateName: 'show-page',
    model() {
      return this.get('store').findRecord('show', 'zone-of-avoidance');
    },

    actions: {

      // willTransition() {
      //   alert('transitioning!');
      // },
      //
      // didTransition() {
      //   alert('zoa');
      //   $('.container .text').css('opacity', '0');
      //
      // }
    }

});

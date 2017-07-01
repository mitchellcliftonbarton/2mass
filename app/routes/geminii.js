import Ember from 'ember';

export default Ember.Route.extend({
  showPage: true,
  templateName: 'show-page',
  model() {
    return this.get('store').findRecord('show', 'geminii', { include: 'images' });
  },

  actions: {
    didTransition() {
        Ember.run.scheduleOnce('afterRender', this, () => {
          debugger;
          TweenMax.to('.container .right .text', 1.4, {delay: .3, opacity: 1, y: 0, ease:Expo.easeOut});
        });
      }
  }
});

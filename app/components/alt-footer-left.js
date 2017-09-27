import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  didInsertElement() {
    this._super(...arguments);

    Ember.run.later(() => {
      TweenMax.fromTo('.show-footer', 3, { opacity: 0, y: -15, ease:Expo.easeOut }, { opacity: 1, y: 0, ease:Expo.easeOut });
    }, 3000)
  }
});

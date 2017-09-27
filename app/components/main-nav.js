import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['main-nav-container'],

  didInsertElement() {
    this._super(...arguments);
    if (this.isInitialLoad) {
      Ember.run.later(() => {
        console.log('initial load true')
        this.$('.main-nav .nav-left').removeClass('hidden');
        this.$('.main-nav .nav-center').removeClass('hidden');
        this.set('isInitialLoad', false);
      }, 1000)
    } else {
      // alert('other')
      console.log('initial load false')
    }

  },

  actions: {
    show() {
      if (this.$('.nav-center').hasClass('open')) {
        Ember.run(() => {
          this.$('.nav-center').removeClass('open');
          TweenMax.staggerTo('.exhibitions-links li', .2, {opacity: 0}, .05)
          TweenMax.to('.exhibitions-links', 0, {display: 'none'});
        })
      } else {
        Ember.run(() => {
          this.$('.nav-center').addClass('open');

          TweenMax.to('.exhibitions-links', 0, {display: 'block'})
          TweenMax.staggerFromTo('.exhibitions-links li', 2, {opacity: 0}, {opacity: 1}, .05)
          TweenMax.staggerFromTo('.exhibitions-links li', .5, {y: 7}, {y: 0}, .05)
        })
      }
    }

  }
});

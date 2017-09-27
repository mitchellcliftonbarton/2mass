import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  
  actions: {
    show() {
      TweenMax.to('.exhibitions-links', .2, {display: 'block'});
      TweenMax.to('.nav-center .hov', .2, {backgroundColor: 'white'});
    },

    hide() {
      TweenMax.to('.exhibitions-links', .2, {display: 'none'});
      TweenMax.to('.nav-center .hov', .2, {backgroundColor: 'none'});
    }

  }
});

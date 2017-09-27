import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);

    Ember.run(() => {
      this.$('.footer p').clone().appendTo('.footer');

      TweenMax.to( $('.footer'), 20,
          {
        	 x: -( $('.footer p').width() ),
           ease: Linear.easeNone,
           repeat: -1
          }
      );
    })
  },
});

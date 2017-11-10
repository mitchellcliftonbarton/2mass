import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['main-nav-container'],

  didInsertElement() {
    this._super(...arguments);

    if (this.isInitialLoad) {

      if (this.randomLanding) {

      } else {

        Ember.run(() => {
            $('.initial-loading-animation').addClass('hide');
            Ember.run.later(() => {
              $('.initial-loading-animation').css('display', 'none');
            }, 300)
        })


        Ember.run.later(() => {
          this.$('.main-nav .nav-left').removeClass('hidden');
          this.$('.main-nav .nav-center').removeClass('hidden');
          this.$('.audio-sounds').removeClass('hidden');
          console.log('hello')
          this.set('isInitialLoad', false);
        }, 1000)

      }

    } else {

    }

  },

  actions: {
    mute() {
      if ($('.speaker').hasClass('mute')) {
        $('.speaker').removeClass('mute');
        document.getElementById('player').volume = 1;
        $('.speaker').text('MUTE');
      } else {
        $('.speaker').addClass('mute');
        document.getElementById('player').volume = 0.0;
        $('.speaker').text('PLAY');
      }
    }
  }
});

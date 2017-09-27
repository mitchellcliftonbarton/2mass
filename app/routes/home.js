import Ember from 'ember';

export default Ember.Route.extend({
    futureTransition: true,

    model(){

    },

    afterModel() {

    },

    actions: {
      didTransition() {
          Ember.run.scheduleOnce('afterRender', this, () => {
            document.body.scrollTop = document.documentElement.scrollTop = 0;

            Ember.run.later(() => {
                TweenMax.fromTo('.content', 3, { opacity: 0, y: -15, ease:Expo.easeOut }, { opacity: 1, y: 0, ease:Expo.easeOut });
                TweenMax.fromTo('.show-footer', 3, { opacity: 0, y: -15, ease:Expo.easeOut }, { opacity: 1, y: 0, ease:Expo.easeOut });
            }, 1000)

          });
      },

      willTransition(transition) {
        console.log(this.futureTransition)

        if (this.futureTransition) {
          transition.abort()
          // console.log('aborted!')

          Ember.run(() => {
            TweenMax.fromTo('.main', .3, { opacity: 1 }, { opacity: 0 });
            TweenMax.fromTo('.content', .3, { opacity: 1, y: 0, ease:Expo.easeOut }, { opacity: 0, y: 15, ease:Expo.easeOut });
            TweenMax.fromTo('.show-footer', .3, { opacity: 1, y: 0, ease:Expo.easeOut }, { opacity: 0, y: 15, ease:Expo.easeOut });

          })

          this.futureTransition = false;
          // console.log(this.futureTransition)

          Ember.run.later(() => {
            transition.retry()
          }, 300)

        } else {
          this.futureTransition = true

        }
      },

      show() {
        if ($('.read-more').hasClass('closed')) {
          Ember.run(() => {
            $('.hidden').css('visibility', 'visible');
            TweenMax.fromTo('.hidden', 3, { opacity: 0, y: -15, ease:Expo.easeOut }, { opacity: 1, y: 0, ease:Expo.easeOut });
            $('.read-more').removeClass('closed');
            $('.read-more').text('READ LESS');
          })
        } else {
          Ember.run(() => {
            TweenMax.fromTo('.hidden', .5, { opacity: 1, y: 0, ease:Expo.easeOut }, { opacity: 0, y: 15, ease:Expo.easeOut, visibility: 'visible' });
            $('.read-more').addClass('closed');
            $('.read-more').text('READ MORE');
          })
        }

      }

  }
});

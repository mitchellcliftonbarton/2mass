import Ember from 'ember';

export default Ember.Route.extend({
    futureTransition: true,

    model(){

    },

    afterModel() {

    },

    actions: {
      didTransition() {

        Ember.run(() => {
          $('.nav-left svg').css('opacity', '0')
          Ember.run.later(() => {
            $('.nav-left svg .st0').removeClass('w-animation')
          }, 300)
          NProgress.done();
        })

        $(window).on('wheel DOMMouseScroll', (e) => {
          console.log('scrolllllll')
          if (e.originalEvent.deltaY >= 0) {
            $('.container.home .content').addClass('showing');
          } else {
            $('.container.home .content').removeClass('showing');
          }
        })


          Ember.run.scheduleOnce('afterRender', this, () => {
            document.body.style.overflow = 'hidden';
            document.body.scrollTop = document.documentElement.scrollTop = 0;

          });
      },

      willTransition(transition) {
        // console.log(this.futureTransition)
        Ember.run(() => {
          $(window).off();
          $('.nav-left svg').css('opacity', '1')
          Ember.run.later(() => {
            $('.nav-left svg .st0').addClass('w-animation')
          }, 300)
          NProgress.start();
        })

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

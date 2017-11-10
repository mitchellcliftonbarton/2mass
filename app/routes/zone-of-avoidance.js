import Ember from 'ember';

export default Ember.Route.extend({
    showPage: true,
    futureTransition: true,
    model() {
      return this.get('store').findRecord('show', 'ac2a7c9e-2cfc-5edb-b8a2-15131f916572', {include: 'images'});
    },
    afterModel() {
      return this.get('store').findRecord('show', 'ac2a7c9e-2cfc-5edb-b8a2-15131f916572', {include: 'pieces,people'});
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
            $('.container.show .content').addClass('showing');
          } else {
            $('.container.show .content').removeClass('showing');
          }
        })


          Ember.run.scheduleOnce('afterRender', this, () => {
            document.body.style.overflow = 'hidden';
            document.body.scrollTop = document.documentElement.scrollTop = 0;

            Ember.run.later(() => {
              TweenMax.fromTo('.photos', 2, { y: -15, ease:Expo.easeOut }, { y: 0, ease:Expo.easeOut });
              TweenMax.fromTo('.photos', 3, { opacity: 0 }, { opacity: 1 });
            }, 1000)
          });
      },

      willTransition(transition) {
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

          Ember.run(() => {
            TweenMax.fromTo('.photos', .4, { opacity: 1 }, { opacity: 0 });
            TweenMax.fromTo('.content', .4, { opacity: 1, y: 0, ease:Expo.easeOut }, { opacity: 0, y: 15, ease:Expo.easeOut });
            TweenMax.fromTo('.show-footer', .3, { opacity: 1, y: 0, ease:Expo.easeOut }, { opacity: 0, y: 15, ease:Expo.easeOut });

          })

          this.futureTransition = false;

          Ember.run.later(() => {
            transition.retry()
          }, 300)

        } else {
          this.futureTransition = true

        }
      },

      resize() {
        if ($('.carousel-inner').hasClass('small')) {
          $('.carousel-inner').removeClass('small')
          Ember.run.later(() => {
            $('.item p span').removeClass('in')
          }, 400)
        } else {
          $('.carousel-inner').addClass('small')
          Ember.run.later(() => {
            $('.item p span').addClass('in')
          }, 400)
        }
      }
  }

});

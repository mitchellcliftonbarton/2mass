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

          $(window).on('scroll.hidden-info', () => {
            if (document.body.scrollHeight - 200 < document.body.scrollTop + window.innerHeight) {
                Ember.run(() => {
                  if (document.body.scrollHeight == document.body.scrollTop + window.innerHeight) {
                    $('.container.show .content').addClass('showing');
                    console.log('youre working')
                  } else {
                    $('.container.show .content').removeClass('showing');
                  }
                })
            } else {
              Ember.run(() => {
                // $('.container.show .content').removeClass('peek');
              })
            }
          })


          Ember.run.scheduleOnce('afterRender', this, () => {
            document.body.scrollTop = document.documentElement.scrollTop = 0;

            Ember.run.later(() => {
              TweenMax.fromTo('.photos', 2, { y: -15, ease:Expo.easeOut }, { y: 0, ease:Expo.easeOut });
              TweenMax.fromTo('.photos', 3, { opacity: 0 }, { opacity: 1 });

              // Ember.run.later(() => {
                TweenMax.fromTo('.content', 3, { opacity: 0, y: -15, ease:Expo.easeOut }, { opacity: 1, y: 0, ease:Expo.easeOut });
              // }, 3000)

            }, 1000)
          });
      },

      willTransition(transition) {
        $(window).off('scroll.hidden-info');

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
      }
  }

});

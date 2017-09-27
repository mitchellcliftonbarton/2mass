import Ember from 'ember';

export default Ember.Route.extend({
  showPage: true,
  futureTransition: true,
  model() {
    return this.get('store').findRecord('show', '3056f58c-12a6-5aa5-92ba-9a96b6e1a2ba', {include: 'images'});
  },

  afterModel() {
    return this.get('store').findRecord('show', '3056f58c-12a6-5aa5-92ba-9a96b6e1a2ba', {include: 'pieces,people'});
  },

  init() {

  },

  actions: {
    didTransition() {

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
            TweenMax.fromTo('.photos', 1, { y: -15, ease:Expo.easeOut }, { y: 0, ease:Expo.easeOut });
            TweenMax.fromTo('.photos', 2, { opacity: 0 }, { opacity: 1 });

            // Ember.run.later(() => {
              TweenMax.fromTo('.content', 2, { opacity: 0 }, { opacity: 1 });
            // }, 1000)

          }, 1000)
        });
     },

      willTransition(transition) {

        $(window).off();
        document.body.style.overflow = 'auto';

        if (this.futureTransition) {
          transition.abort()

          Ember.run(() => {
            TweenMax.fromTo('.photos', .3, { opacity: 1 }, { opacity: 0 });
            TweenMax.fromTo('.content', .3, { opacity: 1, y: 0, ease:Expo.easeOut }, { opacity: 0, y: 15, ease:Expo.easeOut });
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

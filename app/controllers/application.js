import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  isInitialLoad: true,

  randomLanding: Ember.computed('currentRouteName', function() {
    return this.get('currentRouteName') === 'home'
  }),

  isMobile: Ember.computed(() => {
    if ($(window).width() < 450) {
      return true;
    } else {
        return false;
    }
  }),


  allImages: [],

  showPage: Ember.computed('currentRouteName', function() {
    return this.get('currentRouteName') === 'zone-of-avoidance' |
           this.get('currentRouteName') === 'geminii' |
           this.get('currentRouteName') == 'friendship'
  }),

  init() {
    return this.get('store').findAll('image').then((response) => {

      //// this is getting random images for the random landing component
      let final = [];

      let asArray = response.toArray();

      /// split or full
      let rando = Math.floor(Math.random() * 2) + 1;
      /// 2 numbers for photos for split or full
      let picRando1 = Math.floor(Math.random() * (asArray.length - 1));
      let picRando2 = Math.floor(Math.random() * (asArray.length - 1));

      if (rando === 1) {
          let img1 = response.objectAt(picRando1).get('url')
          let img2 = response.objectAt(picRando2).get('url')
          final.push(img1, img2)
      } else {
        let img1 = response.objectAt(picRando1).get('url')
        final.push(img1)
      }

      this.set('allImages', final)
    })
  },

  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});

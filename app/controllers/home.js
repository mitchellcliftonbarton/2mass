import Ember from 'ember';

export default Ember.Controller.extend({
  isInitialLoad: true,
  allImages: [],
  imageClicker: [],

  init() {
    return this.get('store').findAll('image').then((response) => {

      //// this is getting random images for the random landing component
      let final = [];
      let clickFinal =[];

      let asArray = response.toArray();

      for (var i = 0; i < asArray.length; i++) {
        let img = response.objectAt(i).get('url')
        clickFinal.push(img)
      }

      this.set('imageClicker', clickFinal)

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
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  // isInitialLoad: true,
  applicationController: Ember.inject.controller('application'),
  load: Ember.computed.alias('applicationController.isInitialLoad'),
  imageClicker: [],

  init() {
    return this.get('store').findAll('image').then((response) => {

      //// this is getting random images for the random landing component
      let clickFinal =[];

      let asArray = response.toArray();

      for (var i = 0; i < asArray.length; i++) {
        let img = response.objectAt(i).get('url')
        clickFinal.push(img)
      }

      this.set('imageClicker', clickFinal)
    })
  }
});

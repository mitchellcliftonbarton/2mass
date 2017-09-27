import Ember from 'ember';

export default Ember.Controller.extend({

  allImages: Ember.computed(function() {
    return this.get('store').findAll('image')
  }),
  //
  selectedImages: []

});

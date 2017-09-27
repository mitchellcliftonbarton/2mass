import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['photo-clicker-container'],

  actions: {
    addImage() {
      this._super(...arguments);

      let rando = Math.floor(Math.random() * this.imageClicker.length) + 0;

      let img = document.createElement('img')
      img.className = 'photo-clicker-img'
      img.src = this.imageClicker[rando]
      this.$('.photo-clicker').append(img)

      var xc = event.pageX;
      var yc = event.pageY;

      console.log('x = ' + xc + ' y = ' + yc)

      img.style.top = yc + 'px';
      img.style.left = xc + 'px';
    }
  }
});

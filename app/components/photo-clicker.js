import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['photo-clicker-container'],

  didInsertElement() {
    this._super(...arguments);

    if (this.imageClicker.length) {

      let rando = Math.floor(Math.random() * this.imageClicker.length) + 0;

      let img = document.createElement('img')
      img.className = 'photo-clicker-img'
      img.src = this.imageClicker[rando]
      this.$('.photo-clicker').append(img)

      var pos = [Math.floor(Math.random() * 90) + 10,
                 Math.floor(Math.random() * 90) + 10,
                 (Math.floor(Math.random() * 50) + 0) * -1,
                 (Math.floor(Math.random() * 50) + 0) * -1]

      img.style.top = pos[Math.floor(Math.random() * 3) + 0] + '%';
      img.style.left = pos[Math.floor(Math.random() * 3) + 0] + '%';

      if (this.load) {
        console.log('load is true')
      } else {
        Ember.run.later(() => {
          console.log('load is false')
          $('.photo-clicker-img').css('opacity', '1');
          $('.photo-clicker-img').css('transform', 'scale(1)')
        }, 300);
      }

    } else {
      Ember.run.next(this, function() {
        this.didInsertElement()
      })
    }


    $('.photo-clicker').on({
      mouseenter: function() {
        Ember.run(() => {
          $('.delete-text').addClass('visible')

          $(window).keypress((e) => {
            if (e.keyCode === 13) {
              console.log(e.keyCode)
              Ember.run(() => {
                $('.photo-clicker-img').css('opacity', '0');
                $('.delete-text').removeClass('visible')

                Ember.run.later(() => {
                  $('.photo-clicker-img').remove();
                }, 500)
              })
            } else {
              console.log(e.keyCode)
            }
          })

        })
      },
      mouseleave: function() {
        Ember.run(() => {
          $('.delete-text').removeClass('visible')
        })
      }
    }, '.photo-clicker-img');
  },

  actions: {
    addImage() {
      this._super(...arguments);

      let rando = Math.floor(Math.random() * this.imageClicker.length) + 0;

      let img = document.createElement('img')
      img.className = 'photo-clicker-img'
      img.src = this.imageClicker[rando]
      this.$('.photo-clicker').append(img)
      Ember.run.later(() => {
        img.style.opacity = "1"
        img.style.transform = "scale(1)"
      }, 150)

      var pos = [Math.floor(Math.random() * 70) + 10,
                 Math.floor(Math.random() * 70) + 10,
                 (Math.floor(Math.random() * 50) + 0) * -1,
                 (Math.floor(Math.random() * 50) + 0) * -1]

      console.log(pos)

      img.style.top = pos[Math.floor(Math.random() * 3) + 0] + '%';
      img.style.left = pos[Math.floor(Math.random() * 3) + 0] + '%';
    }
  }
});

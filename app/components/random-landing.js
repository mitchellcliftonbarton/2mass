import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['random-landing'],

  init() {
    this._super(...arguments);
  },

  didInsertElement() {
    this._super(...arguments);

    /// with video or not
    let vidRando = Math.floor(Math.random() * 2) + 1;
    /// vid on left or right
    let vidRandoSide = Math.floor(Math.random() * 2) + 1;

    /// function to make video element
    function makeVid(el) {
      let vid = document.createElement('video')
      vid.autoplay = "autoplay"
      vid.loop = "loop"
      vid.className = 'video-spot'
      vid.preload = "auto"

      $(el).append(vid)

      let source1 = document.createElement('source')
      source1.type = "video/mp4"
      source1.src = "media/2MASS3-vid.mp4"

      vid.append(source1)

      vid.addEventListener('loadedmetadata', function() {
        console.log(vid.duration)
        this.currentTime = vid.duration - 10;
      })
    }

    Ember.run.later(() => {
      $('.initial-loading-animation').addClass('hide');
      Ember.run.later(() => {
        $('.initial-loading-animation').css('display', 'none');

        if (this.allImages.length > 1) {

          Ember.run(() => {
              this.$('.full').css('display', 'none');

              if (vidRando === 1) {
                if (vidRandoSide === 1) {
                  this.$('.split .left').css('background-image', 'url("' + this.allImages[0] + '")')
                  makeVid('.right')
                } else {
                  this.$('.split .right').css('background-image', 'url("' + this.allImages[1] + '")')
                  makeVid('.left')
                }
              } else {
                this.$('.split .left').css('background-image', 'url("' + this.allImages[0] + '")')
                this.$('.split .right').css('background-image', 'url("' + this.allImages[1] + '")')
              }

              TweenMax.to('.landing', 1.5, {opacity: 1});
          })
        } else {

          Ember.run(() => {
              this.$('.split').css('display', 'none');

              if (vidRando === 1) {
                /// do image
                this.$('.full').css('background-image', 'url("' + this.allImages[0] + '")')
              } else {
                /// do video background
                makeVid('.full')
              }

              TweenMax.to('.landing', 1.5, {opacity: 1});
          })
        }
      }, 600)
    }, 600)



  },

  actions: {

    goAwayFull() {
      this._super(...arguments);

      Ember.run(() => {
        // document.body.style.overflow = "auto";

        $('.landing').css('height', '0');
        $('.watermark').addClass('hide');

        Ember.run.later(() => {

          $('.main-nav .nav-left').removeClass('hidden');
          $('.main-nav .nav-center').removeClass('hidden');
          $('.audio-sounds').removeClass('hidden');

          Ember.run.later(() => {
            $('.photo-clicker-img').css('opacity', '1');
            $('.photo-clicker-img').css('transform', 'scale(1)')
            this.set('isInitialLoad', false)
          }, 300);
        }, 400)
      })


    }
  }
});

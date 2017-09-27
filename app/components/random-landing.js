import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['random-landing'],

  init() {
    this._super(...arguments);
  },

  didInsertElement() {
    this._super(...arguments);

    Ember.run(() => {
      if (this.isInitialLoad) {
         document.body.style.overflow = "hidden"
        //  alert('yup')
      } else {
        document.body.style.overflow = "auto"
        // alert('nope')
      }
    })

    /// with video or not
    let vidRando = Math.floor(Math.random() * 2) + 1;
    /// vid on left or right
    let vidRandoSide = Math.floor(Math.random() * 2) + 1;

    /// function to make video element
    function makeVid(el) {
      let vid = document.createElement('video')
      vid.autoplay = "autoplay"
      vid.className = 'video-spot'
      vid.preload = "auto"

      $(el).append(vid)

      let source1 = document.createElement('source')
      source1.src = "media/2MASS3-vid.mp4"
      // source1.autoplay = "autoplay"
      source1.type = "video/mp4"

      vid.append(source1)

      // vid.addEventListener('loadedmetadata', function() {
      //   console.log(vid.duration)
      //   this.currentTime = vid.duration - 10;
      //   // this.play()
      // })
    }

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
  },

  willDestroyElement() {
    // console.log('ha;dslfj')
  },

  actions: {
    goAwayLeft() {
      Ember.run(() => {
        document.body.style.overflow = "auto";
        $('.landing').css('cursor', 'initial');
        TweenMax.to('.split .left', .4, {opacity: 0});
        TweenMax.to('.split .right', .4, {delay: .7, opacity: 0});
        TweenMax.to('.watermark', .4, {opacity: 0});
      })

      Ember.run.later(() => {
          this.set('isInitialLoad', false)
          console.log('set it to false');
      }, 1100);
    },

    goAwayRight() {
      Ember.run(() => {
        document.body.style.overflow = "auto";
        $('.landing').css('cursor', 'initial');
        TweenMax.to('.split .right', .4, {opacity: 0});
        TweenMax.to('.split .left', .4, {delay: .7, opacity: 0});
        TweenMax.to('.watermark', .4, {opacity: 0});
      })

      Ember.run.later(() => {
          this.set('isInitialLoad', false)
          console.log('set it to false');
      }, 1100);
    },

    goAwayFull() {
      this._super(...arguments);

      Ember.run(() => {
        document.body.style.overflow = "auto";
        $('.landing').css('cursor', 'initial');

        TweenMax.to('.full', .2, {opacity: 0});
        TweenMax.to('.watermark', .2, {opacity: 0});
      })


      Ember.run.later(() => {
          this.set('isInitialLoad', false)
          console.log('set it to false');
      }, 200);


    }
  }
});

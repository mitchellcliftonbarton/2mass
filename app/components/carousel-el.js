import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: 'yup',

  didInsertElement() {
    this._super(...arguments);
    Ember.run(() => {

      this.$('.carousel-inner .item').first().addClass('active');

      this.$('.carousel').carousel({
        interval: false
      });

      this.$(document).mousemove(function(e) {
        var xc = e.pageX - 25;
        var yc = e.pageY - 40;
        $('.follow').css({'left': xc, 'top': yc});
      });

      this.$('.carousel').mouseenter(function() {
        $('.follow').css('opacity', '1');
      });

      this.$('.carousel .carousel-control.left').mouseenter(function() {
        $('.follow').text('PREV');
      });

      this.$('.carousel .carousel-control.right').mouseenter(function() {
        $('.follow').text('NEXT');
      })

      this.$('.carousel').mouseleave(function() {
        $('.follow').css('opacity', '0');
      });

    })
  }
});

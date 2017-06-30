import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
    // didInsertElement() {
    //   this._super(...arguments);
    //   this.$('.container.home').css('background', 'red');
    // },

    actions: {
      didTransition() {
        alert('a;sdlkfj');
        debugger;
        var container = $('.container').css('background', 'red');
        debugger;
        console.log('this is it ' + container);
        debugger;
        Ember.run.scheduleOnce('afterRender', this, () => {
          // ...
          debugger;
          $('.container').css('background', 'red');
        });
      }
    }
});

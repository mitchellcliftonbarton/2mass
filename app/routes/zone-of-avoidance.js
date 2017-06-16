import Ember from 'ember';

export default Ember.Route.extend({
    showPage: true,
    renderTemplate: function() {
      this.render('show-page');
    }
});

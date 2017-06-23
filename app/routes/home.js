import Ember from 'ember';

export default Ember.Route.extend({
    model() {

      return this.get('store').findAll('show').then(shows => {
          return {
            archived: shows.filterBy('status', 'archive'),
            upcoming: shows.filterBy('status', 'upcoming')
          };

      });

      // return this.get('store').query('show', {
      //   filter: {
      //     status: 'archive'
      //   }
      // })
    }
});

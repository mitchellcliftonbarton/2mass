import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      return this.get('store').findAll('show');

        // return [{
        //     title: 'Geminii',
        //     date: 'June 2, 2017',
        //     artists: 'Featuring - Pearl Corry, Julian Harper, Mykaela Rogers',
        //     link: 'geminii'
        // }, {
        //     title: 'Zone of Avoidance',
        //     date: 'April 14, 2017',
        //     artists: 'Featuring - Eric Edvalson, Ellie Goldrup, Tanner Halversen, Jonathan Frioux, Hannah Pardoe, Jane Christensen',
        //     link: 'zone-of-avoidance'
        //
        // }]
    }
});

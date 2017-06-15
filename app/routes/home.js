import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      // return this.get('store').findRecord('shows', 1);
      // return this.get('store').findAll('shows');

        return [{
            title: 'Geminii',
            date: 'June 2, 2017',
            text: 'Featuring - Pearl Corry, Julian Harper, Mykaela Rogers',
            link: 'geminii'
        }, {
            title: 'Zone of Avoidance',
            date: 'April 14, 2017',
            text: 'Featuring - Eric Edvalson, Ellie Goldrup, Tanner Halversen, Jonathan Frioux, Hannah Pardoe, Jane Christensen',
            link: 'zone-of-avoidance'

        }]
    }
});

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  this.namespace = '/api';

  this.get('/show', function() {
    return {
      data: [{
        type: 'shows',
        id: 'geminii',
        attributes: {
          title: 'Geminii',
          date: 'June 2, 2017',
          artists: 'Featuring - Pearl Corry, Julian Harper, Mykaela Rogers',
          link: 'geminii'
        }
      }, {
        type: 'shows',
        id: 'zone-of-avoidance',
        attributes: {
          title: 'Zone of Avoidance',
          date: 'April 14, 2017',
          artists: 'Featuring - Eric Edvalson, Ellie Goldrup, Tanner Halversen, Jonathan Frioux, Hannah Pardoe, Jane Christensen',
          link: 'zone-of-avoidance'
        }
      }, {
        type: 'shows',
        id: 'friendship',
        attributes: {
          title: 'Friendship',
          date: 'April 14, 2017',
          artists: 'Featuring - Eric Edvalson, Ellie Goldrup, Tanner Halversen, Jonathan Frioux, Hannah Pardoe, Jane Christensen',
          link: 'zone-of-avoidance'
        }
      }]
    };
  });
}

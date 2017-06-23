import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('index', { path: '/' });
  // this.route('index', { path: '/:id' });
  // this.route('about');
  this.route('zone-of-avoidance');
  this.route('home', { path: '/' });
  this.route('geminii');
  this.route('friendship');
  this.route('login');
});

export default Router;

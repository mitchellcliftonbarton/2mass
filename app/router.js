import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('zone-of-avoidance');
  this.route('home', { path: '/' });
  this.route('geminii');
  this.route('friendship');
  this.route('login');
  this.route('create-page');
  this.route('create-image');
  this.route('create-person');
  this.route('create-piece');
  this.route('loading');
});

export default Router;

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('list', { path: '/' }, function() {
    this.route('item', { path: 'user/:id' }, function() {
      this.route('edit');
    });
  });
});

export default Router;

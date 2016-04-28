import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createNew: function() {
      this.store.createRecord('user', { id: Math.floor((Math.random() * 1000000) + 1) });
    }
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteUser: function(user) {
      this.store.peekRecord('user', user.get('id')).unloadRecord();
    },

    newUser: function(component) {
      this.store.createRecord('user', {
                                id: Math.floor((Math.random() * 100) + 1),
                                firstName: component.get('firstName'),
                                lastName: component.get('lastName'),
                              });

      this.set('model', this.store.peekAll('user'));
    },

    unloadAllUsers: function() {
      this.store.unloadAll('user');
    },

    sort: function(param) {
      var sortedList = this.get('model').sortBy('firstName');

      if (param === 'desc') {
        sortedList = sortedList.reverse();
      }

      this.set('model', sortedList.toArray());
    }
  }
});

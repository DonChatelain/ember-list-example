import Ember from 'ember';

export default Ember.Component.extend({
  newUser: 'newUser',
  deleteUser: 'deleteUser',
  unloadAllUsers: 'unloadAllUsers',

  actions: {
    saveNewItem: function() {
      this.sendAction('newUser', this);
      this.set('firstName', '');
      this.set('lastName', '');
    },

    removeUser: function(user) {
      this.sendAction('deleteUser', user);
    },

    sort: function(param) {
      var sortedList = ['empty'];

      if (param === 'asc') {
        sortedList = this.get('list').sort();
      } else if (param === 'desc') {
        sortedList = this.get('list').reverse();
      }

      this.set('list', sortedList.toArray());
    },

    removeUsers: function() {
      this.sendAction('unloadAllUsers');
    }
  }

});

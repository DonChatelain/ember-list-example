import Ember from 'ember';

export default Ember.Component.extend({
  newUser: 'newUser',
  deleteUser: 'deleteUser',
  unloadAllUsers: 'unloadAllUsers',
  sort: 'sort',

  actions: {
    saveNewItem: function() {
      this.sendAction('newUser', this);
      this.set('firstName', '');
      this.set('lastName', '');
    },

    removeUser: function(user) {
      this.sendAction('deleteUser', user);
    },

    removeUsers: function() {
      this.sendAction('unloadAllUsers');
    },

    sort: function(param) {
      this.sendAction('sort', param);
    }
  }

});

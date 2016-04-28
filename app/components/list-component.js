import Ember from 'ember';

export default Ember.Component.extend({
  newItem: 'newItem',
  deleteUser: 'deleteUser',
  unloadAll: 'unloadAll',
  sort: 'sort',
  generate: 'generate',
  reloadContent: 'reloadContent',
  reloadModel: 'reloadModel',

  actions: {
    saveNewItem: function() {
      this.sendAction('newItem', this);
      this.set('firstName', '');
      this.set('lastName', '');
    },

    removeUser: function(user) {
      this.sendAction('deleteUser', user);
    },
  }

});

import Ember from 'ember';

export default Ember.Component.extend({
  newItem: 'newItem',
  deleteUser: 'deleteUser',
  unloadAll: 'unloadAll',
  sort: 'sort',
  generate: 'generate',
  reloadContent: 'reloadContent',
  reloadModel: 'reloadModel',
  setSearch: 'setSearch',

  modelName: 'user',

  searchResult: function() {
    this.sendAction('setSearch', this.get('search'));
  }.observes('search'),

  actions: {
    saveNewItem: function() {
      this.sendAction('newItem', this);
      this.set('firstName', '');
      this.set('lastName', '');
    },

    removeUser: function(user) {
      this.sendAction('deleteUser', user);
    },

    removeAll: function(modelName) {
      this.sendAction('unloadAll', modelName);
      this.set('list', []);
    },

    sort: function(param) {
      this.sendAction('sort', param);
    },

    generate: function(count) {
      this.sendAction('generate', count, this.get('modelName'));
      this.sendAction('reloadModel');
    }
  }

});

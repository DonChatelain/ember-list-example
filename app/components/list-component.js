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
  transitionTo: 'transitionTo',

  showProfile: false,
  // classNameBindings: 'showProfile',

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

    clearList: function(modelName) {
      this.sendAction('unloadAll', modelName);
      this.set('search', '');
      this.sendAction('transitionTo', 'list');
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

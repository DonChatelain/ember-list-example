import Ember from 'ember';

export default Ember.Component.extend({
  sort: 'sort',
  generate: 'generate',
  reloadModel: 'reloadModel',
  setSearch: 'setSearch',
  transitionTo: 'transitionTo',
  unloadAll: 'unloadAll',
  toggleNav: 'toggleNav',

  searchResult: function() {
    this.sendAction('setSearch', this.get('search'));
  }.observes('search'),

  actions: {
    sort: function(param) {
      this.sendAction('sort', param);
    },

    generate: function(count) {
      this.sendAction('generate', count, this.get('modelName'));
      this.sendAction('reloadModel');
    },

    clearList: function() {
      this.sendAction('unloadAll', this.get('modelName'));
      this.sendAction('transitionTo', 'list');
    },

    toggleNav: function() {
      this.sendAction('toggleNav');
    }
  }
});

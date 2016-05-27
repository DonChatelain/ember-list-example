import Ember from 'ember';

export default Ember.Controller.extend({
  sortAscending: true,
  sortedModel: Ember.computed.sort('model', 'sortProperty'),
  sortProperty: ['firstName:asc'],
  search: '',
  queryParams: ['search', 'sortProperty'],
  navExpanded: false,

  userController: Ember.inject.controller('user'),

  actions: {
    setSearch: function(search) {
      console.log('listController', search);
      this.set('search', search);
    },

    reloadModel: function() {
      this.set('model', this.store.peekAll('user'));
    },

    generate: function(count, modelName) {
      var step;
      for (step = 0; step < count; step++) {
        this.get(modelName + 'Controller').send('createNew');
      }
    },

    deleteUser: function(user) {
      user.unloadRecord();
    },

    newItem: function(component) {
      var params = {firstName: component.get('firstName'), lastName: component.get('lastName')};
      this.get('userController').send('createNew', params);
    },

    unloadAll: function(modelName) {
      this.store.unloadAll(modelName);
    },

    sort: function(param) {
      console.log('sort from list');
      this.set('sortProperty', [param]);
    },

    toggleNav: function() {
      this.toggleProperty('navExpanded');
    }


  }
});

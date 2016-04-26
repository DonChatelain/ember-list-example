import Ember from 'ember';

export default Ember.Controller.extend({
  userController: Ember.inject.controller('user'),

  actions: {
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
      this.store.peekRecord('user', user.get('id')).unloadRecord();
    },

    newItem: function(component) {
      var params = {firstName: component.get('firstName'), lastName: component.get('lastName')};
      this.get('userController').send('createNew', params);
    },

    unloadAll: function(modelName) {
      this.store.unloadAll(modelName);
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

import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteUser: function(user) {
      var user = this.store.peekRecord('user', user.get('id'));
      this.store.unloadRecord(user);
    },

    newUser: function(component) {
      this.store.createRecord('user', {
                                id: this.store.peekAll('user').get('length') + 1,
                                firstName: component.get('firstName'),
                                lastName: component.get('lastName'),
                              });

      this.set('model', this.store.peekAll('user'));
    },

    unloadAllUsers: function() {
      this.store.unloadAll('user')
    }
  }
});

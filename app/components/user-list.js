import Ember from 'ember';

export default Ember.Component.extend({
  // sorting: ['list'],
  actions: {
    saveNewItem: function() {
      var list = this.get('list');
      list.push(this.get('newUser'));
      this.set('list', list.toArray());
      this.set('newUser', '');
    },

    removeUsers: function() {
      this.set('list', []);
    },

    sort: function(param) {
      var sortedList = ['empty'];

      if (param === 'asc') {
        sortedList = this.get('list').sort();
      } else if (param === 'desc') {
        sortedList = this.get('list').reverse();
      }

      this.set('list', sortedList.toArray());
    }
  }

});

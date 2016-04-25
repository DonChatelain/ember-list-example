import Ember from 'ember';

export default Ember.Component.extend({
  sorting: ['list'],
  actions: {
    removeUsers: function() {
      this.set('list', [1,2]);
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

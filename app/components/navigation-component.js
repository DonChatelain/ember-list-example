import Ember from 'ember';

export default Ember.Component.extend({
  setSearch: 'setSearch',


  actions: {
    setSearch: function(search) {
      this.sendAction('setSearch', search);
    }
  }
});

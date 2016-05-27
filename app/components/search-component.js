import Ember from 'ember';

export default Ember.Component.extend({
  setSearch: 'setSearch',

  searchResult: function() {
    this.sendAction('setSearch', this.get('search'));
  }.observes('search'),
});

import Ember from 'ember';

export default Ember.Component.extend({
  setSearch: 'setSearch',
  sort: 'sort',
  generate: 'generate',
  showGenerate: false,

  actions: {
    setSearch: function(search) {
      this.sendAction('setSearch', search);
    },

    sort: function(sortParam) {
      this.sendAction('sort', sortParam);
    },

    toggleGenerate: function() {
      this.toggleProperty('showGenerate');
    },

    generate: function(number) {
      this.sendAction('generate', number);
    }
  }
});

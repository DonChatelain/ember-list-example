import Ember from 'ember';

export default Ember.Route.extend( {
  actions: {
    setSearch: function(search) {
      // TODO target something else besides controller?
      this.controllerFor('list').set('search', search);
    }
  }

});

import Ember from 'ember';

export default Ember.Route.extend( {
  actions: {
    setSearch: function(search) {
      // TODO target something else besides controller?
      this.controllerFor('list').set('search', search);
    },

    // TODO target something else besides controller?
    sort: function(sortParam) {
      this.controllerFor('list').send('sort', sortParam);
    },

    // TODO can we do this a different way? have to call 'user' string here to get the
    // userController
    generate: function(number) {
      this.controllerFor('list').send('generate', number, 'user');
    }
  }
});

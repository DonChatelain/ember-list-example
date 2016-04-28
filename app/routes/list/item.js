import Ember from 'ember';

export default Ember.Route.extend( {
  model: function(params) {
    if ( this.store.hasRecordForId('user', params.id) ) {
      return this.store.peekRecord('user', params.id);
    } else {
      this.transitionTo('list');
    }
  },
});

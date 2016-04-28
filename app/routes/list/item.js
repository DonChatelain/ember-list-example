import Ember from 'ember';

export default Ember.Route.extend( {
  resetController: function () {
    this.currentModel.set('showProfile', false);
  },

  model: function(params) {
    if ( this.store.hasRecordForId('user', params.id) ) {
      return this.store.peekRecord('user', params.id);
    } else {
      this.transitionTo('list');
    }
  },

  setupController: function(controller, model) {
    model.set('showProfile', true);

    //Needed in order to pass model to template.
    this._super(controller, model);
  }
});

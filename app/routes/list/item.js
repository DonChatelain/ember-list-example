import Ember from 'ember';

export default Ember.Route.extend( {
  resetController: function () {
    this.currentModel.set('showProfile', false);
  },

  model: function(params) {
    return this.store.findRecord('user', params.id);
  },

  setupController: function(controller, model) {
    model.set('showProfile', true);

    //Needed in order to pass model to template.
    this._super(controller, model);
  }
});

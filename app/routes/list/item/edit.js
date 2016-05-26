import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    this._super(controller, model);
    this.controllerFor('list.item').set('isEditing', true);
  },

  resetController: function(controller, isExiting) {
    if (isExiting) {
      this.controllerFor('list.item').set('isEditing', false);
    }
  }

});

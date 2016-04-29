import Ember from 'ember';

export default Ember.Route.extend( {

  renderTemplate(controller) {
    this._super(...arguments);
    var outlet;
    if (controller.get("sidenavActive")) {
      outlet = "sidenav";
    } else {
      outlet = "inline";
    }

    this.render("list/item", {
        into: "list",
        outlet: outlet
    });
  },

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

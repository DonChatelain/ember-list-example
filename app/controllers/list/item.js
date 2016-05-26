import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    isEditing: function(model) {
      model.toggleProperty('isEditing');
    },
  }
});

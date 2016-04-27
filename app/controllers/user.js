import Ember from 'ember';
import faker from 'faker';

export default Ember.Controller.extend({
  createFakeAttrs: function() {
    return { firstName: faker.name.firstName(),
             lastName: faker.name.lastName(),
             age: faker.random.number(50)
           };
  },

  actions: {
    createNew: function( opts=this.createFakeAttrs() ) {
      this.store.createRecord('user', {
        id: Math.floor((Math.random() * 1000000) + 1),
        firstName: opts.firstName,
        lastName: opts.lastName,
        age: opts.age
      });
    }
  }
});

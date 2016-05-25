import {faker} from 'ember-cli-mirage';
import Ember from 'ember';

export default Ember.Controller.extend({
  createAttrs: function() {
    var attrs = {
                id: Math.floor((Math.random() * 1000000) + 1),
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                age: faker.random.number(99),
                avatar: faker.image.avatar(),
                streetAddress1: faker.address.streetAddress(),
                city: faker.address.streetAddress(),
                state:  faker.address.state(),
                zipcode: faker.address.zipCode(),
                color:  faker.commerce.color(),
                companyName: faker.company.companyName(),
                catchPhrase:  faker.hacker.phrase(),
                type: 'user'
    };
    return attrs;
  },

  actions: {
    createNew: function() {
      var user = this.store.createRecord('user', this.createAttrs() );
      user.save();
    }
  }
});

import Ember from 'ember';
import faker from 'faker';

export default Ember.Route.extend({
  model() {
    var loop;
    for (loop = 0; loop < 5; loop++) {
      this.store.push({
        data: [{
          id: loop + 1,
          type: 'user',
          attributes: {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName()
          },
          relationships: {}
        }]
      });
    }

   return this.store.peekAll('user');
  },

});

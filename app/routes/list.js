import Ember from 'ember';
import faker from 'faker';

export default Ember.Route.extend( {
  init: function() {
    var loop;
    for (loop = 0; loop < 5; loop++) {
      this.store.push({
        data: [{
          id: loop + 1,
          type: 'user',
          attributes: {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            age: faker.random.number(50)
          },
          relationships: {}
        }]
      });
    }
  },

  model: function(params) {
    console.log('PARAMS!!!', params);
    var users = this.store.peekAll('user');

    if (params.search.length > 1) {
      var searchTerm = params.search;
      users = users.filter(function(user) {
        return user.get('firstName').indexOf(searchTerm) !== -1 ||
               user.get('lastName').indexOf(searchTerm) !== -1;
      });
    }
    return users;
  },

  queryParams: {
    search: {
      refreshModel: true
    }
  },

  actions: {
    reloadModel: function(){
      this.refresh();
    }
  }

});

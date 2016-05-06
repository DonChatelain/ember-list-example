import Ember from 'ember';

export default Ember.Route.extend( {
  // init: function() {
  //   this.store.createRecord('user', { id: Math.floor((Math.random() * 1000000) + 1) });
  // },

  model: function(params) {
    var users = this.store.findAll('user');

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
    },
    sort: {
      refreshModel: false
    }
  },

  actions: {
    reloadModel: function(){
      this.refresh();
    },

    transitionTo: function(route) {
      this.transitionTo(route);
    }
  }

});

import DS from 'ember-data';
import faker from 'faker';

export default DS.Model.extend({
  firstName: DS.attr('string', { defaultValue: function() {
      return faker.name.firstName();
    }
  }),

  lastName: DS.attr('string', { defaultValue:  function() {
      return faker.name.lastName();
    }
  }),

  age: DS.attr('number', { defaultValue: function() {
      return faker.random.number(99);
    }
  }),

  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName')
});

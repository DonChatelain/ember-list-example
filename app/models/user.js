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
  }.property('firstName', 'lastName'),

  avatar: DS.attr('string', { defaultValue: function() {
      return faker.image.avatar();
    }
  }),

  streetAddress1: DS.attr('string', { defaultValue: function() {
      return faker.address.streetAddress();
    }
  }),

  city: DS.attr('string', { defaultValue: function() {
      return faker.address.city();
    }
  }),

  state: DS.attr('string', { defaultValue: function() {
      return faker.address.state();
    }
  }),

  zipCode: DS.attr('string', { defaultValue: function() {
      return faker.address.zipCode();
    }
  }),

  color: DS.attr('string', { defaultValue: function() {
      return faker.commerce.color();
    }
  }),

  companyName: DS.attr('string', { defaultValue: function() {
      return faker.company.companyName();
    }
  }),

  catchPhrase: DS.attr('string', { defaultValue: function() {
      return faker.hacker.phrase();
    }
  }),



});

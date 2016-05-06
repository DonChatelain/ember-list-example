import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  avatar: DS.attr('string'),
  streetAddress1: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  zipCode: DS.attr('string'),
  color: DS.attr('string'),
  companyName: DS.attr('string'),
  catchPhrase: DS.attr('string'),
  type: DS.attr('string', { defaultValue: 'user' }),
  age: DS.attr('number'),

  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName'),

});

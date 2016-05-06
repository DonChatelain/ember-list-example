/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  'first-name'() { return faker.name.firstName(); },
  'last-name'() { return faker.name.lastName(); },
  'age'() { return faker.random.number(99); },
  'avatar'() { return faker.image.avatar(); },
  'street-address1'() { return faker.address.streetAddress(); },
  'city'() { return faker.address.streetAddress(); },
  'state'() {   return faker.address.state(); },
  'zipcode'() { return faker.address.zipCode(); },
  'color'() {  return faker.commerce.color(); },
  'company-name'() { return faker.company.companyName(); },
  'catch-phrase'() {  return faker.hacker.phrase(); },
  'type': 'user'
});

import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: 'btn',

  click: function() {
    this.sendAction('action', this.get('param'));
  }
});

import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  rules: Ember.computed.reads('model.rules'),
  dataFields: Ember.computed.reads('model.data_fields'),

  rerenderJson() {
    console.log('re-rendering');
    this.notifyPropertyChange('model');
  },

  actions: {
    addRule() {
      const rules = this.get('model.rules');
      rules.pushObject({});
      this.rerenderJson();
    },
    renderJson() {
      this.rerenderJson();
    },
  },
});

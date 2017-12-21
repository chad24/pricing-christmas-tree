import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  rules: Ember.computed.reads('model.rules'),
  dataFields: Ember.computed.reads('model.data_fields'),

  json: Ember.computed('model', function() {
    let json = JSON.stringify(this.get('model'), null, 4);
    return json;
  }),

  rerenderJson() {
    Ember.run.later(() => this.notifyPropertyChange('model'));
  },

  actions: {
    addRule() {
      const rules = this.get('model.rules');
      rules.pushObject({
        rule_name: '',
        rule_description: '',
        conditions: {
          all: [],
        },
        actions: [],
      });
      this.rerenderJson();
    },

    removeRule(rule) {
      const rules = this.get('model.rules');
      rules.removeObject(rule);
      this.rerenderJson();
    },

    renderJson() {
      this.rerenderJson();
    }
  },
});

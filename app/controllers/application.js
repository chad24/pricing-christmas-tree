import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  ajax: Ember.inject.service(),

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
        rule_sequence_number: 1,
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
    },

    postJson() {
      this.set('calculatedPrice', null);
      const ajax = this.get('ajax');
      // ajax.set('contentType', 'application/json; charset=utf-8');
      return ajax
        .post('http://10.10.129.15:5000/ruleparser', {
          method: 'POST',
          data: JSON.stringify(this.get('model')),
        })
        .then(price => {
          this.set('calculatedPrice', Math.round(Number(price) * 100) / 100);
        });
    },
  },
});

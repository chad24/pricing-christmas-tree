import Component from '@ember/component';
import Ember from 'ember';

const newCondition = () => {
  return {
    name: '',
    condition_sequence_number: '',
    type: '',
    data_field: '',
    operator: '',
    value: '',
  };
};


export default Component.extend({
  tagName: 'rule-form',

  dataFields: [],
  rule: {
    rule_name: '',
    rule_description: '',
    conditions: {
      all: [],
    },
  },

  conditions: Ember.computed.reads('rule.conditions.all'),

  actions: {
    addCondition() {
      const conditions = this.get('conditions');
      conditions.pushObject(newCondition());
      this.notifyPropertyChange('conditions');
    },
    removeCondition(condition) {
      this.get('conditions').removeObject(condition);
    }
  },
});

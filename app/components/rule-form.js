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

const newAction = () => {
  return {
    action_name: '',
    action_type: '',
    action_sequence_number: '',
    multiplier_formula: '',
    multiplier_value: '',
  };
};

export default Component.extend({
  tagName: 'rule-form',

  dataFields: [],
  rule: {
    rule_name: '',
    rule_description: '',
    rule_sequence_number: 1,
    rule_number: 1,
    conditions: {
      all: [],
    },
    actions: [],
  },

  init() {
    const randomRuleNumber = Math.round(1000000 * Math.random());
    this.set('rule.rule_number', randomRuleNumber);

    this._super();
  },

  conditions: Ember.computed.reads('rule.conditions.all'),
  ruleActions: Ember.computed.reads('rule.actions'),
  refresh: () => {},

  actions: {
    addCondition() {
      const conditions = this.get('conditions');
      conditions.pushObject(newCondition());
      this.notifyPropertyChange('conditions');
      this.refresh();
    },

    addAction() {
      const actions = this.get('ruleActions');
      actions.pushObject(newAction());
      this.notifyPropertyChange('ruleActions');
      this.refresh();
    },

    removeCondition(condition) {
      this.get('conditions').removeObject(condition);
      this.notifyPropertyChange('ruleActions');
      this.refresh();
    },

    removeAction(action) {
      this.get('ruleActions').removeObject(action);
      this.notifyPropertyChange('ruleActions');
      this.refresh();
    },
  },
});

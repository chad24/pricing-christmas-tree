import Ember from 'ember';
import Component from '@ember/component';

export default Component.extend({
  ruleAction: {
    action_name: '',
    action_type: '',
    action_sequence_number: '',
    multiplier_formula: '',
    multiplier_value: '',
  },

  actions: {
    changeValue() {
      Ember.run.next(
        () => this.notifyPropertyChange('ruleAction') && this.refresh()
      );
    },
  },
});

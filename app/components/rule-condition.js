import Ember from 'ember';
import Component from '@ember/component';

export default Component.extend({
  condition: {
    name: '',
    condition_sequence_number: '',
    type: '',
    data_field: '',
    operator: '',
    value: '',
  },

  conditionString: Ember.computed('condition', function() {
    return JSON.stringify(this.get('condition'));
  }),

  dataFields: [
    {
      field_name: 'some_field',
      field_name_visible: 'Some Field',
    },
  ],

  didReceiveAttrs() {
    if (!this.get('condition.data_field')) {
        this.set('condition.data_field', this.get('selectedDataField.field_name'))
    }
  },

  selectedDataField: Ember.computed('dataFields', function() {
    return {};
  }),

  selectedCondition: '>',

  operators: ['>', '<', '>=', '<=', '==', '!='],

  value: '',

  actions: {
    changeDataField(dataField) {
      this.set('selectedDataField', dataField);
      this.set('condition.data_field', dataField.field_name);
      this.notifyPropertyChange('condition');
    },

    changeOperator(operator) {
      this.set('condition.operator', operator);
      this.notifyPropertyChange('condition');
    },

    changeValue() {
        Ember.run.next(() => this.notifyPropertyChange('condition'));
    }
  },
});

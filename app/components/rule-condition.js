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

  dataFields: [],

  selectedDataField: Ember.computed('dataFields', function() {
    return {};
  }),

  selectedOperator: Ember.computed('operators', function() {
      return this.get('operators')[0];
  }),

  operators: [
    {
        symbole: '',
        value: ''
    },
    {
        symbol: '>',
        value: 'greater_than'
    },
    {
        symbol: '>=',
        value: 'greater_than_equal_to'
    },
    {
        symbol: '<',
        value: 'less_than'
    },
    {
        symbol: '<=',
        value: 'less_than_equal_to'
    },
    {
        symbol: '==',
        value: 'equal_to'
    },
    {
        symbol: '!=',
        value: 'not_equal_to'
    },
  ],

  value: '',

  actions: {
    changeDataField(dataField) {
      this.set('selectedDataField', dataField);
      this.set('condition.data_field', dataField.field_name);
      this.notifyPropertyChange('condition');
      this.refresh();
    },

    changeOperator(operator) {
      this.set('condition.operator', operator.value);
      this.set('selectedOperator', operator);
      this.notifyPropertyChange('condition');
      this.refresh();
    },

    changeValue() {
      Ember.run.next(
        () => this.notifyPropertyChange('condition') && this.refresh()
      );
    },
  },
});

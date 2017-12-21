import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      material_number: '201701010111',
      material_name: 'Armlehnenstuhl Nicholas I',
      material_type: 'ZHAW',
      material_priority: 'HIGH',
      output_type: 'price',
      output_type_data: 'float',
      data_fields: [
        {
          field_name_visible: 'Product Weight',
          field_description: 'Weight in KG',
          field_name: 'product_weight',
          field_source: 'json::product_weight',
          field_source_type: 'json',
        },
        {
          field_name_visible: 'Current inventory',
          field_description: 'Inventory in units',
          field_name: 'inventory_current_units',
          field_source: 'json::inventory_current_units',
          field_source_type: 'json',
        },
      ],
      rules: [],
    };
  },
});

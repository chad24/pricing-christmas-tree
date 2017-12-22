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
      rules: [],
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
        {
          field_name_visible: 'Competitor Price',
          field_description: 'Competitor Price',
          field_name: 'competitor_price',
          field_source: 'json::inventory_current_units',
          field_source_type: 'json',
        },
        {
          field_name_visible: 'Delivery Time in Days',
          field_description: 'Delivery Time',
          field_name: 'delivery_time',
          field_source: 'json::inventory_current_units',
          field_source_type: 'json',
        },
        {
          field_name_visible: 'Country like DE, NL',
          field_description: 'Country like DE, NL',
          field_name: 'country',
          field_source: 'json::inventory_current_units',
          field_source_type: 'json',
        },
        {
          field_name_visible: 'Seasonality',
          field_description: 'Seasonality',
          field_name: 'seasonality',
          field_source: 'json::inventory_current_units',
          field_source_type: 'json',
        },
      ],
    };
  },
});

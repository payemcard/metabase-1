export const dataBarsOneSeries = {
  rows: [
    [0, 1295.51],
    [1.5, 158.97],
    [2.25, 136.06],
    [3, 2642.0],
    [3.75, 5976.6],
    [4.5, 940.11],
  ],
  cols: [
    {
      description:
        "The average rating users have given the product. This ranges from 1 - 5",
      semantic_type: "type/Score",
      table_id: 1,
      coercion_strategy: null,
      binning_info: {
        min_value: 0,
        max_value: 5.25,
        num_bins: 8,
        bin_width: 0.75,
        binning_strategy: "num-bins",
      },
      name: "RATING",
      settings: null,
      source: "breakout",
      field_ref: [
        "field",
        6,
        {
          binning: {
            strategy: "num-bins",
            "min-value": 0,
            "max-value": 5.25,
            "num-bins": 8,
            "bin-width": 0.75,
          },
        },
      ],
      effective_type: "type/Float",
      nfc_path: null,
      parent_id: null,
      id: 6,
      visibility_type: "normal",
      display_name: "Rating",
      fingerprint: {
        global: {
          "distinct-count": 23,
          "nil%": 0,
        },
        type: {
          "type/Number": {
            min: 0,
            q1: 3.5120465053408525,
            q3: 4.216124969497314,
            max: 5,
            sd: 1.3605488657451452,
            avg: 3.4715,
          },
        },
      },
      base_type: "type/Float",
    },
    {
      base_type: "type/Float",
      semantic_type: null,
      settings: null,
      name: "sum",
      display_name: "Sum of Price",
      source: "aggregation",
      field_ref: ["aggregation", 0],
      effective_type: "type/Float",
    },
  ],
  _transformed: true,
  _rawCols: [
    {
      description:
        "The average rating users have given the product. This ranges from 1 - 5",
      semantic_type: "type/Score",
      table_id: 1,
      coercion_strategy: null,
      binning_info: {
        min_value: 0,
        max_value: 5.25,
        num_bins: 8,
        bin_width: 0.75,
        binning_strategy: "num-bins",
      },
      name: "RATING",
      settings: null,
      source: "breakout",
      field_ref: [
        "field",
        6,
        {
          binning: {
            strategy: "num-bins",
            "min-value": 0,
            "max-value": 5.25,
            "num-bins": 8,
            "bin-width": 0.75,
          },
        },
      ],
      effective_type: "type/Float",
      nfc_path: null,
      parent_id: null,
      id: 6,
      visibility_type: "normal",
      display_name: "Rating",
      fingerprint: {
        global: {
          "distinct-count": 23,
          "nil%": 0,
        },
        type: {
          "type/Number": {
            min: 0,
            q1: 3.5120465053408525,
            q3: 4.216124969497314,
            max: 5,
            sd: 1.3605488657451452,
            avg: 3.4715,
          },
        },
      },
      base_type: "type/Float",
    },
    {
      base_type: "type/Float",
      semantic_type: null,
      settings: null,
      name: "sum",
      display_name: "Sum of Price",
      source: "aggregation",
      field_ref: ["aggregation", 0],
      effective_type: "type/Float",
    },
  ],
};

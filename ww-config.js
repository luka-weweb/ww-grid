export default {
  editor: {
    label: {
      en: "Grid",
      fr: "Grid",
    },
  },
  properties: {
    columns: {
      label: {
        en: "Columns",
      },
      type: "Number",
      defaultValue: 4,
      options: {
        min: 1, // default 0
        max: 10, // default 100,
        step: 1, // default 1
      },
    },
    rowGap: {
      label: {
        en: "Row gap",
      },
      type: "Number",
      defaultValue: 4,
      options: {
        min: 1, // default 0
        max: 10000, // default 100,
        step: 1, // default 1
      },
    },
    columnGap: {
      label: {
        en: "Column gap",
      },
      type: "Number",
      defaultValue: 4,
      options: {
        min: 1, // default 0
        max: 10000, // default 100,
        step: 1, // default 1
      },
    },
    activeToggleLayout: {
      hidden: true,
      defaultValue: [],
    },
  },
};

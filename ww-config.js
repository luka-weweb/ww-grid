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
      responsive: true,
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
      responsive: true,
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
      responsive: true,
    },
    activeToggleLayout: {
      label: {
        en: "Items",
        fr: "Items",
      },
      type: "Info",
      options: {
        text: { en: "Elements to repeat" },
      },
      hidden: (content, sidePanelContent, boundProps, wwProps) =>
        !!(wwProps && wwProps.isFixed),
      bindable: "repeatable",
      defaultValue: [],
      /* wwEditor:start */
      bindingValidation: {
        validations: [
          {
            type: "array",
          },
          {
            type: "object",
          },
        ],
        tooltip:
          'A collection or an array of data: \n\n`myCollection` or `[{}, {}, ...] || ["string1", "string2", ...] || [1, 2, ...]`',
      },
      /* wwEditor:end */
    },
  },
};

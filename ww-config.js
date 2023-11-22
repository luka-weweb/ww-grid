export default {
  editor: {
    label: {
      en: "My Element",
    },
  },
  properties: {
    template: {
      label: {
        en: "template",
      },
      type: "Number",
      defaultValue: 4,
      options: {
        min: 1, // default 0
        max: 10, // default 100,
        step: 1, // default 1
      },
    },
    header: {
      hidden: true,
      bindable: "repeatable",
      defaultValue: [],
    },
  },
};

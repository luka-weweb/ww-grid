<template>
    <div class="my-element">
      <wwLayout class="ww-grid" :style="template" path="activeToggleLayout" />  
    </div>
</template>

<script>
export default {
  props: {
    content: { type: Object, required: true },
    uid: { type: String, required: true },
    wwElementState: { type: Object, required: true },
    /* wwEditor:start */
    wwEditorState: { type: Object, required: true },
    /* wwEditor:end */
  },
  computed: {
    template() {
      const style = {};

      let result = "";
      for (let i = 0; i < this.content.columns; i++) {
        result += "1fr "
      }

      style['grid-template-columns'] = `${result}`;
      style['row-gap'] = `${this.content.rowGap}px`;
      style['column-gap'] = `${this.content.columnGap}px`;

      return style;
    },
  },
  watch: {
    'content.value'(newValue) {
      newValue = !!newValue;
      if (newValue === this.value) return;
      this.setValue(newValue);
      this.$emit('trigger-event', { name: 'initValueChange', event: { value: newValue } });
    },
    isEditing() {
      this.editLayout = false;
    },
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
.my-element {
  p {
    font-size: 18px;
  }
}

.ww-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
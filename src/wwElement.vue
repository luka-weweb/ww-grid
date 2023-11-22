<template>
  <div class="my-element">
    <div>
      <wwLayout path="header" class="ww-grid" :style="`grid-template-columns: ${template}`"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: { type: Object, required: true },
  },
  computed: {
    template() {
      let result = "";
      for (let i = 0; i < this.content.template; i++) {
        result += "1fr "
      }
      return result // 5
    },
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

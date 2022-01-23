<template functional>
  <svg
    v-bind="data.attrs"
    :class="[data.staticClass || '', data.class]"
    :width="props.size || props.width"
    :height="props.size || props.height"
    fill="currentColor"
  >
    <use :xlink:href="`${require(`@/assets/images/sprite.svg`)}#${props.name}`"/>
  </svg>
</template>

<script>
export default  {
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: [String, Number],
      default: null,
    },
    width: {
      type: [String, Number],
      default: null,
    },
    height: {
      type: [String, Number],
      default: null,
    },
  }
}
</script>

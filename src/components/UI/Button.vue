<template>
  <div>
    <slot name="icon"/>
    <slot>
      {{ 'Button' }}
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    class: {
      type: String,
      required: true,
    }
  }
}
</script>

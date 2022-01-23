<template>
  <div
    v-if="isOpen"
    :class="['alert', `alert-bg-${type}`, `alert-position-${position}`]">
    <div class="alert-icon">
      <ui-icon :name="type" size="14"/>
    </div>
    <div class="alert-body">
      <div :class="['alert-title', `alert-color-${type}`]">
        {{ title }}!
      </div>
      <div class="alert-text">
        {{ text }}
      </div>
    </div>
    <div class="alert-close" @click="close">
      <ui-icon name="close" size="10" :class="[`alert-color-${type}`]"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      default: 'top-right',
    }
  },

  data() {
    return {
      isOpen: true,
    }
  },

  methods: {
    close() {
      this.isOpen = false
      this.$emit('close', this.isOpen)
    }
  }
}
</script>

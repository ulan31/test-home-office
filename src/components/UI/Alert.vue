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

<style scoped>
  .alert {
    padding: 15px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 1000;
  }

  .alert-position-top-right {
    top: 16px;
    right: 16px;
  }

  .alert-position-top-left {
    top: 16px;
    left: 16px;
  }

  .alert-position-bottom-left {
    bottom: 16px;
    left: 16px;
  }

  .alert-position-bottom-right {
    bottom: 16px;
    right: 16px;
  }

  .alert-bg-success {
    background-color: #C5F2C7;
  }

  .alert-bg-danger {
    background-color: #FCD0CF;
  }

  .alert-bg-warning {
    background-color: #FBE5C9;
  }

  .alert-color-success {
    color: #1F8B24;
  }

  .alert-color-danger {
    color: #DA100B;
  }

  .alert-color-warning {
    color: #BF710F;
  }

  .alert-body {
    display: flex;
    align-items: center;
  }

  .alert-title {
    font-size: 14px;
    padding-left: 10px;
    font-weight: bold;
  }

  .alert-text {
    font-size: 12px;
    padding-left: 12px;
    padding-right: 40px;
  }

  .alert-close {
    cursor: pointer;
  }
</style>

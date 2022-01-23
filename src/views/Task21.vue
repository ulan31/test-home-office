<template>
  <div>
    <Alert
      :type="'success'"
      :title="'Congratulations'"
      :text="'You`ve reached a success'"
    />
    <Alert
      :type="'warning'"
      :title="'Warning state'"
      :text="'You better check the belt'"
      :position="'bottom-right'"
    />
    <Alert
      :type="'danger'"
      :title="'Machine overheated'"
      :text="'High risk level'"
      :position="'top-left'"
    />
  </div>
</template>

<script>
import Alert from '@/components/UI/Alert'

export default {
  components: {
    Alert
  }
}
</script>

<template>
    <span>
        <bcf></bcf>
    </span>
</template>

<script>
import Bcf from '@/components/Bcf'

export default {
  name: 'home',
  components: {
    Bcf
  }
}
</script>
<style>
  .input-group__details:after {
    background-color: rgba(255, 255, 255, 0.32) !important;
  }
</style>

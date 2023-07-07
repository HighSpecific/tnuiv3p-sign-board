<script lang="ts" setup>
import { signBoardProps } from './types'
import { useSignBoardCustomStyle } from './composables'

const props = defineProps(signBoardProps)

const { ns, signBoardStyle } = useSignBoardCustomStyle(props)
</script>

<template>
  <view :class="[ns.b(), ns.is('disabled', disabled)]" :style="signBoardStyle">
    <view :class="[ns.e('wrapper')]">
      <canvas :class="[ns.e('canvas')]" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import './theme-chalk/index.scss';
</style>

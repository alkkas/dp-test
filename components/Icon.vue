<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const props = defineProps<{
  svgName: string
  width: number
  height?: number
  className?: string
}>()

const Icon = defineAsyncComponent(
  () => import(`../assets/imgs/${props.svgName}.svg`)
)
</script>

<template>
  <div
    :class="['icon-container', className ?? '']"
    :style="{ width: width + 'px', height: (height ?? width) + 'px' }"
  >
    <Icon
      class="svg-icon"
      :style="{ height: height ? height + 'px' : 'auto' }"
    />
  </div>
</template>

<style scoped lang="scss">
.icon-container {
  display: grid;
  align-items: center;
  justify-items: center;
}
.svg-icon {
  width: 100%;
  margin: 0;
}
</style>

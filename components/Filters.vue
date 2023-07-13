<template>
  <div class="filters">
    <ul class="source-filter">
      <li><button>Все</button></li>
      <li><button>3dnews.ru</button></li>
      <li>
        <button>habr.com</button>
      </li>
    </ul>

    <ul class="item-appearance">
      <li>
        <button>
          <Icon svgName="long-item" :width="15" :height="20" />
        </button>
      </li>
      <li>
        <button>
          <Icon svgName="short-item" :width="20" :height="20" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.filters {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.source-filter {
  display: flex;
  align-items: center;
  gap: 10px;
}
.item-appearance {
  display: flex;
  align-items: center;
  gap: 9px;
}
</style>

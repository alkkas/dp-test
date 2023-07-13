<template>
  <div>
    <header class="header">
      <div class="header__content">
        <div class="header-left">
          <TheTitle>Список новостей</TheTitle>
          <ResetIcon />
        </div>
        <SearchBar />
      </div>

      <hr class="header__line-break" />
    </header>
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
  &__line-break {
    height: 1px;
    background-color: #e5e5e5;
    border: 0;
  }
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 37px;
  }
}

.header-left {
  display: flex;
  align-items: center;
  gap: 47px;
}
</style>

<template>
  <div class="card">
    <div>
      <slot />
    </div>
    <footer class="card__footer">
      <p>text1</p>
      <p>text2</p>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.card {
  padding: 30px 30px 15px;
  border-radius: 6px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
  background-color: $light;
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $primary;
  }
}
</style>

<script setup lang="ts">
import useNewsStore from '~/store/store'
const newsStore = useNewsStore()
const { data } = await useFetch<[]>('/api/news')
</script>

<template>
  <main style="margin-top: 26px">
    <Filters />

    <section class="items">
      <ShortItem />
      <LongItem />
    </section>
    <div class="pagination">
      <vue-awesome-paginate
        :total-items="data?.length"
        :items-per-page="4"
        :max-pages-shown="4"
        :hide-prev-next="true"
        v-model="newsStore.$state.page"
        class="pagination"
      />
    </div>
  </main>
</template>

<style scoped lang="scss">
.items {
  margin: 25px 0 50px;
  display: grid;
  gap: 20px;
}
.pagination {
  display: grid;
  align-items: center;
  justify-items: center;
}
</style>

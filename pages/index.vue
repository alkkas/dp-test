<script setup lang="ts">
import useNewsStore from '~/store/store'
import type { newsItem } from '~/types/global'

const { data } = await useFetch<newsItem[]>('/api/news')

const news = useNewsStore()
news.setNews(data.value)
</script>

<template>
  <main style="margin-top: 26px">
    <Filters />

    <section
      v-if="news.itemType === 'small'"
      :class="['items', news.itemType === 'small' ? 'items--small' : '']"
    >
      <SmallItem v-for="item in news.newsToShow" :item="item" />
    </section>
    <section v-else-if="news.itemType === 'large'" class="items">
      <LargeItem v-for="item in news.newsToShow" :item="item" />
    </section>

    <div class="pagination">
      <vue-awesome-paginate
        :total-items="news.filteredNews.length"
        :items-per-page="news.perPage"
        :max-pages-shown="4"
        :hide-prev-next="true"
        v-model="news.page"
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
  &--small {
    grid-template-columns: 1fr 1fr;
    @media (max-width: $tablet) {
      grid-template-columns: 1fr;
    }
  }
}

.pagination {
  display: grid;
  align-items: center;
  justify-items: center;
}
</style>

import { defineStore } from 'pinia'

interface newsStore {
  news: []
  filters: {
    source: 'all' | '3dnews' | 'habr'
    searchQuery: string
  }
  page: number
  perPage: number
}

const useNewsStore = defineStore('news', {
  state: (): newsStore => ({
    news: [],
    filters: {
      source: 'all',
      searchQuery: '',
    },
    page: 1,
    perPage: 4,
  }),
  actions: {
    setNews(news: []) {
      this.news = news
    },
  },
})

export default useNewsStore

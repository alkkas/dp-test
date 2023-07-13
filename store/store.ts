import { defineStore } from 'pinia'
import type { newsItem } from 'types/global'

export interface newsStore {
  news: newsItem[]
  filters: {
    source: 'all' | '3dnews.ru' | 'habr.com'
    searchQuery: string
  }
  page: number
  perPage: number
  itemType: string | null
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
    itemType: null,
  }),
  actions: {
    setNews(news: newsItem[] | null) {
      this.news = news ?? []
    },
    setFilters(filters: newsStore['filters']) {
      this.filters = filters
    },
    resetFilters() {
      this.filters = {
        source: 'all',
        searchQuery: '',
      }
    },
    changeFilterSource(value: newsStore['filters']['source']) {
      this.filters.source = value
    },
    setLocalValues() {
      const value = localStorage.getItem('itemType') || 'small'
      this.itemType = value
      if (value === 'small') {
        this.perPage = 4
      } else {
        this.perPage = 3
      }
    },
  },
  getters: {
    filteredNews(state): newsItem[] {
      let filteredNews: newsItem[] = state.news
      if (state.filters.source !== 'all') {
        filteredNews = filteredNews.filter(
          (item) => item.source === state.filters.source
        )
      }
      if (state.filters.searchQuery !== '') {
        filteredNews = filteredNews.filter((item) => {
          const title = item?.title?.toLowerCase()
          const desc = item?.desc?.toLowerCase()
          if (
            title?.includes(state.filters.searchQuery.toLowerCase()) ||
            desc?.includes(state.filters.searchQuery.toLowerCase())
          ) {
            return true
          }
        })
      }
      return filteredNews
    },

    newsToShow(state): newsItem[] {
      const pagesToSkip = (state.page - 1) * state.perPage
      return this.filteredNews.slice(pagesToSkip, state.perPage + pagesToSkip)
    },
  },
})

export default useNewsStore

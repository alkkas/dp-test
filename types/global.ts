export type newsItem = {
  author: { name: string }
  content_html: string
  date_published: string
  desc: string
  guid: string
  imgUrl: string
  summary: string
  source: '3dnews.ru' | 'habr.com'
  title: string
  url: string
}

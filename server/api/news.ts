export default defineEventHandler(async (event) => {
  const dNews: any = await $fetch(
    'https://www.toptal.com/developers/feed2json/convert?url=https://3dnews.ru/software/rss/'
  )
  const parsedDNews = dNews.items.map((item: any) => {
    const misc = item.summary.split(/<img\s+[^>]*src="([^"]*)"[^>]*>/)
    return {
      ...item,
      imgUrl: misc[1],
      desc: misc[2],
      source: '3dnews.ru',
    }
  })

  const habrNews: any = await $fetch(
    'https://www.toptal.com/developers/feed2json/convert?url=https://habr.com/ru/rss/all/all?limit=100'
  )
  const parsedHabrNews = habrNews.items.map((item: any) => {
    const misc = item.summary.split(/<img\s+[^>]*src="([^"]*)"[^>]*>/)
    if (misc.length === 1) {
      const desc = misc[0].split(/<p>([^\<]*?)<\/p>/)
      return {
        ...item,
        desc: item.summary,
        imgUrl: '',
        source: 'habr.com',
      }
    } else {
      return {
        ...item,
        desc: misc[2],
        imgUrl: misc[1],
        source: 'habr.com',
      }
    }
  })

  return [...parsedDNews, ...parsedHabrNews]
})

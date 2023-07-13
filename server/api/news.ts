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
    }
  })

  return parsedDNews
})

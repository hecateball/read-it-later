import * as functions from 'firebase-functions'
import * as parse from 'ogp-parser'

module.exports = functions.region('asia-northeast1').https.onCall(async ({ url }) => {
  const { title, ogp } = await parse(url, true)

  this.title = title
  this.image = ogp['og:image:secure_url'] || ogp['og:image'] ? {
    src: ogp['og:image:secure_url'] ? ogp['og:image:secure_url'][0] : ogp['og:image'][0],
    alt: ogp['og:image:alt'] ? ogp['og:image:alt'][0] : ''
  } : null
  this.description = ogp['og:description'] ? ogp['og:description'][0] : null

  return {
    title: title,
    image: ogp['og:image:secure_url'] || ogp['og:image'] ? {
      src: ogp['og:image:secure_url'] ? ogp['og:image:secure_url'][0] : ogp['og:image'][0],
      alt: ogp['og:image:alt'] ? ogp['og:image:alt'][0] : ''
    } : null,
    description: ogp['og:description'] ? ogp['og:description'][0] : null
  }
})
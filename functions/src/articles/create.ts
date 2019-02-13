import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'
import * as parse from 'ogp-parser'

module.exports = functions.region('asia-northeast1')
  .firestore.document('versions/v1/users/{uid}/articles/{id}')
  .onCreate(async (snapshot) => {
    const { title, ogp } = await parse(snapshot.get('url'), true)

    await snapshot.ref.set({
      ...snapshot.data(),
      title: title,
      image: {
        url: ogp['og:image:secure_url'] ? ogp['og:image:secure_url'][0]
            : ogp['og:image'] ? ogp['og:image'][0] : null,
        alt: ogp['og:image:alt'] ? ogp['og:image:alt'][0] : ''
      },
      description: ogp['og:description'] ? ogp['og:description'][0] : null,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    })
  })
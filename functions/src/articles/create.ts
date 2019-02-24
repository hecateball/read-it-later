import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'
import * as parse from 'ogp-parser'

module.exports = functions.region('asia-northeast1')
  .firestore.document('users/{uid}/articles/{id}')
  .onCreate(async (snapshot, { params }) => {
    const { title, ogp } = await parse(snapshot.get('url'), true)
    const article = {
      ...snapshot.data(),
      title: title,
      image: {
        url: ogp['og:image:secure_url'] ? ogp['og:image:secure_url'][0]
          : ogp['og:image'] ? ogp['og:image'][0] : null,
        alt: ogp['og:image:alt'] ? ogp['og:image:alt'][0] : ''
      },
      description: ogp['og:description'] ? ogp['og:description'][0] : null
    }

    const user = await admin.auth().getUser(params.uid)
    const batch = admin.firestore().batch()
    batch.set(snapshot.ref, {
      ...article,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    })
    batch.set(admin.firestore().collection('articles').doc(), {
      ...article,
      user: {
        displayName: user.displayName,
        photoURL: user.photoURL
      },
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    })
    await batch.commit()
  })
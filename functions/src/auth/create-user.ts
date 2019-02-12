import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'


module.exports = functions.region('asia-northeast1').auth.user().onCreate(async (user) => {
  await admin.firestore().doc(`users/${user.uid}`).set({
    displayName: user.displayName,
    photoURL: user.photoURL,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  })
})
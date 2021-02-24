import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

export const onEntryMessage = functions.firestore.document('Messages/{docID}')
    .onCreate(async (snap, context) => {
        try{
            return snap.ref.set({adminMessage: "Welcome to Unity Mobile"}, {merge: true})
        }
        catch(err) {
            console.log("Something went wrong: ", err);
            return Promise.reject(err)
        }
    })
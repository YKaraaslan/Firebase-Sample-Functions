import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

export const sendEmail = functions.https
    .onRequest((req, res) => {
        console.log(req);
})
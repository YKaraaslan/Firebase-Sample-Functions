import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

export const updateImage = functions.database
    .ref('/images/{imageID}')
    .onCreate(async event => {
        console.log(event)
})

export const resizeImage = functions.database
    .ref('/images/{imageID}')
    .onCreate(async event => {
        console.log(event)
})

import * as functions from "firebase-functions";
import * as admin from 'firebase-admin'

admin.initializeApp(functions.config().firebase)

import * as email from './email';
import * as images from './images';
import * as adminMessages from './message';
import * as messages from './message/controller';

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Logs!", {structuredData: true});
  response.send("Response from Firebase!");
});

export const sendEmail = email.sendEmail
export const updateImage = images.updateImage
export const resizeImage = images.resizeImage

export const onEntryMessage = adminMessages.onEntryMessage
export const addMessage = messages.addMessage;
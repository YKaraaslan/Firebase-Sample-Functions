import 'jest'
import * as functions from 'firebase-functions-test'
import * as admin from 'firebase-admin'

const testEnv = functions({
    databaseURL: 'databaseURL',
    projectId: 'projectId'
}, './service-account.json')

import * as myFunctions from '../src'

describe('onEntryMessage', () => {
    let wrapped: any
    let path = 'Messages/{MessageID}'

    beforeAll(() => {
        wrapped = testEnv.wrap(myFunctions.onEntryMessage)
    })

    afterEach(() => {
        return admin.firestore().doc(path).delete()
    })

    test('New message document', async () => {
        const snap = await testEnv.firestore.makeDocumentSnapshot({sender: "Unity Team"}, path)

        wrapped(snap)

        const after = await admin.firestore().doc(path).get()
        expect(after.exists).toBe(true)

        const dataMessage = after.data()!.adminMessage
        console.log(dataMessage);
        expect(dataMessage).toBe('Welcome to Unity Mobile')
    })
})
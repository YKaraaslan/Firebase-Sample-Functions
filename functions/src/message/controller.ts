import { Response } from 'express'
import { db } from '../config/firebase'

type MessageType = {
    title: string,
    text: string
}

type Request = {
    body: MessageType,
    params: { MessageId: string }
}

export const addMessage = async (req: Request, res: Response) => {
    const { title, text } = req.body
    try{
        const message = db.collection('Messages').doc()
        const messageObject = {
            id: message.id,
            title,
            text
        }

        message.set(messageObject)

        res.status(200).send({
            status: 'success',
            message: 'message added successfully',
            data: messageObject
        })
    } 
    catch(err){
        res.status(500).json(err.message)
    }
}
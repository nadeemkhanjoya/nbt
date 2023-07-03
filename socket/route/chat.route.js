import express from 'express'
import { chat, chatget } from '../controller/chat.cont.js'
var chatrouter = express.Router()
chatrouter.route("/chat/create").post(chat)
chatrouter.route("/chat/get").get(chatget)
export default chatrouter
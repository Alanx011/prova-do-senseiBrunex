import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import heroiController from './controller/heroiController.js'

const server = express()
server.use(cors())
server.use(express.json())
server.use(heroiController)




server.listen(process.env.PORT,() => 
            console.log (`API online na porta ${process.env.PORT}`));
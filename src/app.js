import express from 'express'
import routes from './routes.js' 

const app = express()

// Fazendo o express ler body com json
app.use(express.json())

//Usando routes
app.use(routes)

export default app
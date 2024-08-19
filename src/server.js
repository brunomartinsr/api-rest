import app from './app.js'

const PORT = process.env.PORT || 3000

// conectando
app.listen(PORT, () => {
  console.log(`Servidor rodando no enderaço http://localhost:${PORT}`)
})

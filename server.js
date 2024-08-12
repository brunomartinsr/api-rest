import app from './src/app.js'

const PORT = 3000

// conectando
app.listen(PORT, () => {
  console.log(`Servidor rodando no enderaço http://localhost:${PORT}`)
})

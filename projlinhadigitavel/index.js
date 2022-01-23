const customExpress = require('./config/customExpress')

const app = customExpress()

app.use((req, res, next) => {
 res.status(404).send({
 status: 404,
 error: 'Not found'
 })
})

app.listen(3000, () => console.log('Servidor rodando na porta 3000.'))


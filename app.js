const express = require('express')
const session = require('express-session')
const app = express()
const port = process.env.PORT || 3000

const sessionConfig = {
    secret: 'timbooktu'
};

const router = require('./routes')

app.locals.toIndonesianRupiah = require('./helpers/toIndonesianRupiah');
app.locals.dateToIndonesian = require('./helpers/dateToIndonesian');

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
app.use(session(sessionConfig))

app.use('/assets', express.static('assets'));
app.use('/uploads', express.static('uploads'));
app.use(router)

app.listen(port, () => {
    console.log('listening on port:', port)
})
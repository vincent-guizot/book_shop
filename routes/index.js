const {Router} = require('express')
const multer = require('multer');
const router = Router()
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + file.originalname)
    }
})
const upload = multer({
    storage: storage
})

const Controller = require('../controllers/controller.js')

function requireAdminLogin(req, res, next) {
    if(!req.session.adminId) {
        res.redirect('/admin/login');
    } else {
        next();
    }
}

function requireUserLogin(req, res, next) {
    if(!req.session.userId) {
        res.redirect('/login');
    } else {
        next();
    }
}

router.get('/', Controller.home)
router.get('/registrasi', Controller.registrasiForm)
router.post('/registrasi', Controller.registrasi)
router.get('/login', Controller.loginForm)
router.post('/login', Controller.login)
router.get('/logout', Controller.logout)
router.get('/book', Controller.findBooksCustomer)
router.get('/book/detail/:id', Controller.bookDetailCustomerForm)
router.get('/buy/:id', requireUserLogin, Controller.buyForm)
router.post('/buy/:id', requireUserLogin, Controller.buy)
router.get('/buysuccess', requireUserLogin, Controller.buySuccess)

router.get('/admin/login', Controller.showLoginAdmin)
router.post('/admin/login', Controller.loginAdmin)
router.get('/admin/logout', Controller.logoutAdmin)

router.get('/bookAdmin', requireAdminLogin, Controller.findBooksAdmin)
router.get('/book/add', requireAdminLogin, Controller.addBookAdminForm)
router.post('/book/add', requireAdminLogin, upload.single('image'), Controller.addBookAdmin)
router.get('/book/edit/:id', requireAdminLogin, Controller.editBookAdminForm)
router.post('/book/edit/:id', requireAdminLogin, upload.single('image'), Controller.editBookAdmin)
router.get('/book/delete/:id', requireAdminLogin, Controller.deleteBookAdmin)
router.get('/transactions', requireAdminLogin, Controller.transactions)


module.exports = router
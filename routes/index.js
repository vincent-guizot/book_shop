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
router.get('/bread', Controller.findBreadsCustomer)
router.get('/bread/detail/:id', Controller.breadDetailCustomerForm)
router.get('/buy/:id', requireUserLogin, Controller.buyForm)
router.post('/buy/:id', requireUserLogin, Controller.buy)
router.get('/buysuccess', requireUserLogin, Controller.buySuccess)

router.get('/admin/login', Controller.showLoginAdmin)
router.post('/admin/login', Controller.loginAdmin)
router.get('/admin/logout', Controller.logoutAdmin)

router.get('/breadAdmin', requireAdminLogin, Controller.findBreadsAdmin)
router.get('/bread/add', requireAdminLogin, Controller.addBreadAdminForm)
router.post('/bread/add', requireAdminLogin, upload.single('image'), Controller.addBreadAdmin)
router.get('/bread/edit/:id', requireAdminLogin, Controller.editBreadAdminForm)
router.post('/bread/edit/:id', requireAdminLogin, upload.single('image'), Controller.editBreadAdmin)
router.get('/bread/delete/:id', requireAdminLogin, Controller.deleteBreadAdmin)
router.get('/transactions', requireAdminLogin, Controller.transactions)


module.exports = router

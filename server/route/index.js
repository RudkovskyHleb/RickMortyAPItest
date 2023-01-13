const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const characterRouter = require('./characterRouter')

router.use('/user', userRouter)
router.use('/character', characterRouter)
module.exports = router
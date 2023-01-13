const Router = require('express')
const router = new Router()
const characterController = require('../controllers/characterController')

router.get('/', characterController.findCharacters)
router.get('/:id' , characterController.getCharacterInfo)
module.exports = router
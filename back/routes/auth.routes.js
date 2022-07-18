import express from 'express'
import * as controller from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/', controller.create)
router.post('/login', controller.login)

export default router
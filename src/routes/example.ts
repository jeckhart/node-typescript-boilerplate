'use strict'

// Test routes
import { Router } from 'express'
import { health, ping } from '../controllers/example'

let router = Router()
router.get('/health', health)
router.get('/ping', ping)

export default router

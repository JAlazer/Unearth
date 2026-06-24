import express from 'express'
import giftData from '../data/gifts.js'
import { getGifts, getGiftById } from '../controller/gifts.js'

const router = express.Router()


router.get('/', getGifts)

router.get('/:giftId', getGiftById)

export default router
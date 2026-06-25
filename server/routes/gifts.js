import express from 'express'
import giftData from '../data/gifts.js'
import { getGifts, getGiftById, createGift, deleteGift, updateGift } from '../controller/gifts.js'

const router = express.Router()


router.get('/', getGifts)

router.get('/:giftId', getGiftById)

router.post('/', createGift);

router.delete('/:id', deleteGift);

router.patch('/:id', updateGift);

export default router
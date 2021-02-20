import express from "express"
import clientRouter from './../../clientRouter.js'

const battingRouter = new express.Router()

battingRouter.get('/', async (req,res) => {
  try {
    const batting = await Batting.query()
    return res.status(200).json({ batting: batting })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default battingRouter
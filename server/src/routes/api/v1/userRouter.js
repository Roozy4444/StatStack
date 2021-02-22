import express from 'express'
import User from './../../../models/User.js'

const userRouter = new express.Router()

userRouter.get('/', async (req,res) => {
  try {
    const users = await User.query()
    return res.status(200).json({ user: users })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

userRouter.get('/:id', async (req,res) => {
  const id = req.params.email
  try {
    const users = await User.query().findById(id)
    users.batting = await users.$relatedQuery('batting')
    return res.status(200).json({ user: users })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default userRouter
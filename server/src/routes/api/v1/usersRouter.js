import express from "express"
import objection from 'objection'
import passport from 'passport'
const {ValidationError} = objection

import { User } from "../../../models/index.js"

const usersRouter = new express.Router()

usersRouter.post("/", async (req, res) => {
  const { email, firstName, lastName, password, passwordConfirmation } = req.body
  try {
    const persistedUser = await User.query().insertAndFetch({
      email,
      firstName,
      lastName,
      password,
    })
    return req.login(persistedUser, () => {
      return res.status(201).json({ user: persistedUser })
    })
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log(error.data)
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})

export default usersRouter
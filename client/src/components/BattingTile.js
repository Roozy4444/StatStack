import React from "react"
import { Link } from "react-router-dom"

const BattingTile = ({ batting }) => {
  let img = 'https://media.giphy.com/media/kyRhs8taQA6tGGwd0q/giphy.gif'

  return(
    <div>
      <img className='giph'src={img}></img>
    </div>
  )
}

export default BattingTile
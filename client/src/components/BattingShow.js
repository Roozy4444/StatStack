import React, { useState, useEffect } from "react"
import BattingTile from './BattingTile.js'

const BattingShow = props => {
  // const [bat, setBat] = useState({ 

  // })

  let img = 'https://www.fg-a.com/sports/baseball-batter-4.jpg'

  let giph = 'http://cdn2.sbnation.com/assets/3386905/G2-Ortiz-Slam.gif'

  return(
    <div>
      <h1>Batting Stats</h1>
      <img className= 'icon' src={img} />
      <img className='giph'src={giph} />
      <h3>Batting Average: 0.523</h3>
      <h3>Homeruns: 7</h3>
      <h3>RBI's: 16</h3>
      <h3>Hits: 23</h3>
      <h3>At Bats: 44</h3>
      <h3>Doubles: 11</h3>
      <h3>Triples: 3</h3>
      <h3>Strikeouts: 5</h3>
      <h3>Stolen Bases: 8</h3>
    </div>
  )
}

export default BattingShow
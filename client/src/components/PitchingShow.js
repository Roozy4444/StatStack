import React, { useState, useEffect } from "react"

const PitchingShow = props => {
  // const [bat, setBat] = useState({ 

  // })

  let img = 'https://www.fg-a.com/sports/baseball-pitcher-1.jpg'

  let giph = 'https://media.giphy.com/media/1xkNbECNBlrJ8FsRxn/giphy.gif'

  return(
    <div>
      <h1>Pitching Stats</h1>
      <img className= 'icon' src={img} />
      <img className='giph'src={giph} />
      <h3>Wins: 2</h3>
      <h3>Losses: 0</h3>
      <h3>ERA: 1.08</h3>
      <h3>Strikeouts: 44</h3>
      <h3>Earned Runs: 3</h3>
      <h3>Innings Pitched: 25</h3>
      <h3>Base on Balls: 3</h3>
      <h3>Hits: 18</h3>
      <h3>Saves: 3</h3>
    </div>
  )
}

export default PitchingShow
import React, { useState, useEffect } from "react"

const FieldingShow = props => {
  // const [bat, setBat] = useState({ 

  // })

  let img = 'https://www.fg-a.com/sports/baseball-fielder-1.jpg'

  let giph ='https://media.giphy.com/media/orUAjxy2YVDoAcPNhK/giphy.gif'

  return(
    <div>
      <h1>Fielding Stats</h1>
      <img className= 'icon' src={img} />
      <img className='giph'src={giph} />
      <h3>Fielding %: 0.985</h3>
      <h3>Putouts: 109</h3>
      <h3>Assists: 30</h3>
      <h3>Errors: 2</h3>
      <h3>Double Plays: 15</h3>
      <h3>Chances: 141</h3>
    </div> 
  )
}

export default FieldingShow
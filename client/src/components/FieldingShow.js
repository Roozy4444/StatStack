import React, { useState, useEffect } from "react"

const FieldingShow = props => {
  // const [bat, setBat] = useState({ 

  // })

  let img = 'https://www.fg-a.com/sports/baseball-fielder-1.jpg'

  return(
    <div>
      <h1>Fielding Stats</h1>
      <img className= 'icon' src={img} />
      <h3>Fielding %:</h3>
        <ul></ul>
      <h3>Putouts:</h3>
        <ul></ul>
      <h3>Assists:</h3>
        <ul></ul>
      <h3>Errors:</h3>
        <ul></ul>
      <h3>Double Plays:</h3>
        <ul></ul>
      <h3>Chances:</h3>
        <ul></ul>
     
    </div>
  )
}

export default FieldingShow
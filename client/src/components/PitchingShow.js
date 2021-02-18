import React, { useState, useEffect } from "react"

const PitchingShow = props => {
  // const [bat, setBat] = useState({ 

  // })

  let img = 'https://www.fg-a.com/sports/2017-pitcher.gif'

  return(
    <div>
      <h1>Pitching Stats</h1>
      <img className= 'icon' src={img} />
      <h3>Wins:</h3>
        <ul></ul>
      <h3>Losses:</h3>
        <ul></ul>
      <h3>ERA:</h3>
        <ul></ul>
      <h3>Strikeouts:</h3>
        <ul></ul>
      <h3>Earned Runs:</h3>
        <ul></ul>
      <h3>Innings Pitched:</h3>
        <ul></ul>
      <h3>Base on Balls:</h3>
        <ul></ul>
      <h3>Hits:</h3>
        <ul></ul>
      <h3>Saves:</h3>
        <ul></ul>

    </div>
  )
}

export default PitchingShow
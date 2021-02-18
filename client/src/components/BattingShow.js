import React, { useState, useEffect } from "react"

const BattingShow = props => {
  // const [bat, setBat] = useState({ 

  // })

  let img = 'https://www.fg-a.com/sports/baseball-batter-4.jpg'

  return(
    <div>
      <h1>Batting Stats</h1>
      <img className= 'icon' src={img} />
      <h3>Batting Average:</h3>
        <ul></ul>
      <h3>Homeruns:</h3>
        <ul></ul>
      <h3>RBI's:</h3>
        <ul></ul>
      <h3>Hits:</h3>
        <ul></ul>
      <h3>At Bats:</h3>
        <ul></ul>
      <h3>Doubles:</h3>
        <ul></ul>
      <h3>Strikeouts:</h3>
        <ul></ul>
      <h3>Stolen Bases:</h3>
        <ul></ul>

    </div>
  )
}

export default BattingShow
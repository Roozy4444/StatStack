import React, { useState, useEffect } from "react"
import BattingTile from './BattingTile'

const PastTenShow = props => {
  return (
    <div>
      <h1>Compare Stats</h1>
      <div  className='compare-container'>
        <h5>Last 3 Games</h5>
        <p>Batting:</p>
        <p>Batting Average: 0.600 Homeruns: 3 RBI's: 11 Hits: 9 At Bats: 15 Doubles: 5 Triples: 1 Strikeouts: 2 Stolen Bases: 2</p>
        <p>Pitching:</p>
        <p>Wins: 0 Losses: 1 ERA: 2.25 Strikeouts: 14 Earned Runs: 2 Innings Pitched: 8 Base on Balls: 1 Hits: 6 Saves: 1</p>
        <p>Fielding:</p>
        <p>Fielding %: 1.000 Putouts: 36 Assists: 12 Errors: 0 Double Plays: 6 Chances: 48</p>
      </div>
      <div className='compare-container'>
      <h5>Last 6 Games</h5>
        <p>Batting:</p>
        <p>Batting Average: 0.531 Homeruns: 3 RBI's: 19 Hits: 17 At Bats: 32 Doubles: 9 Triples: 2 Strikeouts: 2 Stolen Bases: 7</p>
        <p>Pitching:</p>
        <p>Wins: 1 Losses: 1 ERA: 1.80 Strikeouts: 27 Earned Runs: 3 Innings Pitched: 15 Base on Balls: 2 Hits: 11 Saves: 1</p>
        <p>Fielding:</p>
        <p>Fielding %: 1.000 Putouts: 36 Assists: 12 Errors: 0 Double Plays: 6 Chances: 48</p>
      </div>
      <div className='compare-container'>
      <h5>Last 10 Games</h5>
        <p>Batting:</p>
        <p>Batting Average: 0.523 Homeruns: 7 RBI's: 16 Hits: 23 At Bats: 44 Doubles: 11 Triples: 3 Strikeouts: 5 Stolen Bases: 8</p>
        <p>Pitching:</p>
        <p>Wins: 2 Losses: 0 ERA: 1.08 Strikeouts: 44 Earned Runs: 3 Innings Pitched: 25 Base on Balls: 3 Hits: 18 Saves: 3</p>
        <p>Fielding:</p>
        <p>Fielding %: 0.985 Putouts: 109 Assists: 30 Errors: 2 Double Plays: 15 Chances: 141</p>
      </div>
    </div>
  )
}

export default PastTenShow
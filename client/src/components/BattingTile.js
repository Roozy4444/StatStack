  
import React from "react"
import { Link } from "react-router-dom"

const BattingTile = ({ batting }) => {
  let img = 'https://www.fg-a.com/sports/baseball-batter-1.jpg'

  let avg = batting.hits / batting.atBats

  return (
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

export default BattingTile
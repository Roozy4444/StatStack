import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import translateServerErrors from '../services/translateServerErrors.js'
import UserTile from './UserTile.js'
import { Link } from "react-router-dom"

const UserShow = props => {
  let img = 'https://www.fg-a.com/sports/2020-baseball-umpire-batter-catcher.jpg'

  return (
    <div className='user-container'>
      <div className='user'>
        <div className='user-img'>
          <img className='icon2' src={img} />
        </div>
        <div className='user-details'>
          <h1>
            Welcome William Howell
          </h1>
        </div>
        <div className='batting-link'>
          <h3 className='stat-link'>
            <Link to='/batting'>Batting Stats</Link>
          </h3>
        </div>
        <div className='pitching-link'>
          <h3 className='stat-link'>
            <Link to='/pitching'>Pitching Stats</Link>
          </h3>
        </div>
        <div className='fielding-link'>
          <h3 className='stat-link'>
            <Link to='/fielding'>Fielding Stats</Link>
          </h3>
        </div>
        </div>
    </div>
  )
}

export default UserShow
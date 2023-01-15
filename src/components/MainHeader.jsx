import {Link} from 'react-router-dom'
import Image from '../images/main_header.png'
import React from 'react'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className="container main__header-container">
        <div className="heading main__header-left">
          <h4>#100DaysOfWorkout</h4>
          <h1>Join the legends of the Fitness World</h1>
          <p>
            Achieve your fitness goals within a short period of time. No story
          </p>
          <Link to='/plans' className='btn lg'>Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header Imag" />
          </div>

        </div>
      </div>

    </header>
  )
}

export default MainHeader;
import React from 'react'
import Navbar from '../components/Navbar'
const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <div className='home-container'>
        <div className="description">
          <p></p>
        </div>
        <div className="image">
          <img src="/images/homepage/home1.png" alt="about" />
        </div>
      </div>
      <div className="about-container" id='About'>
        <h2>Founders</h2>
        <div className="cards">
          <div className="card">
            <img src="" alt="founder" />
            <h3>title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sequi, libero odit dolores unde debitis autem neque, quam, molestiae tempore repellat animi harum! Id accusamus porro a exercitationem at? Neque!</p>
          </div>
          <div className="card">
            <img src="" alt="founder" />
            <h3>title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sequi, libero odit dolores unde debitis autem neque, quam, molestiae tempore repellat animi harum! Id accusamus porro a exercitationem at? Neque!</p>
          </div>
          <div className="card">
            <img src="" alt="founder" />
            <h3>title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sequi, libero odit dolores unde debitis autem neque, quam, molestiae tempore repellat animi harum! Id accusamus porro a exercitationem at? Neque!</p>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default Homepage

import React from 'react'
import './Header.css'
const Header=()=>{
    return (
        <>
        <nav className='main_nav'>
            <div className='logo'>
                <h1>
                    <span>N</span>ame
                    <span> S</span>urname
                </h1>
            </div>

            <div className='links_menu'>
              <ul>
                  
                  <li>
                      <a href='https://www.google.com/'target='_About'>About</a>
                  </li>
                  
                  
                  <li>
                      <a href='https://www.google.com/'target='_Portfolio'>Portfolio</a>
                  </li>
                  <li>
                      <a href='https://www.google.com/'target='_Skills'>Skills</a>
                  </li>
                  <li>
                      <a href='https://www.google.com/'target='_Services'>Services</a>
                  </li>
                  <li>
                      <a href='https://www.google.com/'target='_Home'>Home</a>
                  </li>
                 
              </ul>
            </div>


        </nav>
        </>
    )
    
}
export default Header;
import React from 'react'
import img from '../images/logo.svg'
// import {data} from '../components/data'
// import { sociallinks } from '../components/data'
import Pagelinks from './Pagelinks'
import Sociallink from './Sociallink'
const navbar = () => {
  return (
    
      <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={img} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
       <Pagelinks navlinks='nav-links' navlink='nav-link'/>
        <Sociallink/>
        {/* <ul className="nav-icons">
         
            {sociallinks.map((item)=>{
             return ( <li key={item.id}>
                <a href={item.href} target="_blank" rel="noreferrer" className="nav-icon"><i className={item.favicon}></i></a>
              </li>)
              // target="_blank" is responsible for opening link in new tab
            })
          } */}
          
          {/* <li>
            <a href="https://www.twitter.com" target="_blank" className="nav-icon"
              ><i className="fab fa-facebook"></i
            ></a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" className="nav-icon"
              ><i className="fab fa-twitter"></i
            ></a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" className="nav-icon"
              ><i className="fab fa-squarespace"></i
            ></a>
          </li> */}
        {/* </ul> */}
      </div>
    </nav>
   
  );
}

export default navbar

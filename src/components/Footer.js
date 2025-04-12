import React from 'react'
// import { data } from './data'
import { sociallinks } from './data'
import Pagelinks from './Pagelinks'
const Footer = () => {
  return (
        <footer className="section footer">
          <Pagelinks navlinks='footer-links' navlink="footer-link"/>
      {/* <ul className="footer-links">
       {data.map((item)=>{
         return ( <li key={item.id}>
          <a href={item.href} className="footer-link">{item.linkname}</a>
        </li>)
        })}
      </ul> */}

      <ul className="footer-icons">
       {sociallinks.map((item)=>{
          return ( <li key={item.id}>
          <a href={item.href} target="_blank" rel="noreferrer" className="footer-icon"
            ><i className={item.favicon}></i
          ></a>
        </li>)
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>

  )
}

export default Footer

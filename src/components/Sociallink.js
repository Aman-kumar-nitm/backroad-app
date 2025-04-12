import React from 'react'
import { sociallinks } from './data'
const Sociallink = () => {
  return (
    <ul className="nav-icons">
             
                {sociallinks.map((item)=>{
                 return ( <li key={item.id}>
                    <a href={item.href} target="_blank" rel="noreferrer" className="nav-icon"><i className={item.favicon}></i></a>
                  </li>)
                  // target="_blank" is responsible for opening link in new tab
                })
              }
        </ul>
    
  )
}

export default Sociallink

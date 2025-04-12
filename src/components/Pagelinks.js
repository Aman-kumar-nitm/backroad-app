 import React from 'react'
 import { data } from './data'
 const Pagelinks = (props) => {
   return (
     <ul className={props.navlinks} id="nav-links">
         {data.map((item)=>{
         return  <li key={item.id}><a href={item.href} className={props.navlink}>{item.linkname}</a></li>
         })}
        </ul>
   )
 }
 
 export default Pagelinks
 
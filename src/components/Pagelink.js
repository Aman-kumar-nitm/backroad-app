import React from 'react'
import Pagelinks from './Pagelinks'
const Pagelink = () => {
  return (
       <>{Pagelinks.map((item)=>{
        <li className=''><a href={`#${item.linkname}`}>{item.linkname}</a></li>
    })}
    </> 
  )
}

export default Pagelink

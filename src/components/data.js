import tour1 from '../images/tour-1.jpeg'
import tour2 from '../images/tour-2.jpeg'
import tour3 from '../images/tour-3.jpeg'
import tour4 from '../images/tour-4.jpeg'
export const data =[
    {   
        id:1,
        linkname:'home',
        href:'#home',
    },
    {id:2,
        linkname:'services',
          href:'#services',
    },
    {id:3,
        linkname:'about',
          href:'#about',
    },
    {id:4,
        linkname:'tour',
        href:'#tours'
    },
];

export const sociallinks=[
    {   id:1,
        href:'https://www.twitter.com',
        favicon:'fab fa-facebook'
    },
    {   id:2,
        href:'https://www.twitter.com',
        favicon:'fab fa-twitter',
    },
    {   id:3,
        href:'https://www.twitter.com',
        favicon:'fab fa-squarespace'
    },
    
]
// export default links

export const servicedata=[
    {id:1,icon:'fas fa-wallet fa-fw',title:'saving money',},
    {id:2,icon:'fas fa-tree fa-fw',title:'endless hiking',},
    {id:3,icon:'fas fa-socks fa-fw',title:'amazing comfort',},
]

export const tourdata=[
    {id:1,img:tour1,date:'october 1th, 2020',title:'Tibet Adventure',country:'china',days:'6 days',money:'from $2100'},
    {id:2,img:tour2,date:'august 26th, 2020',title:'best of java',country:'indonesia',days:'11 days',money:'from $1400'},
    {id:3,img:tour3,date:'september 15th, 2020',title:'explore hong kong',country:'hong kong',days:'8 days',money:'from $5000'},
    {id:4,img:tour4,date:'december 5th, 2019',title:'kenya highlights',country:'kenya',days:'20 days',money:'from $3300'},

]
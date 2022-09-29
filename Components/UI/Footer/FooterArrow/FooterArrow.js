import React, {useState} from 'react'
import styled from 'styled-components'
import ArrowIcon from '../../Icons/ArrowIcon'
function FooterArrow() {
    const [showScroll, setShowScroll] = useState(false)

// const checkScrollTop = () => {    
//    if (!showScroll && window.pageYOffset > 400){
//       setShowScroll(true)    
//    } else if (showScroll && window.pageYOffset <= 400){
//       setShowScroll(false)    
//    }  
// };
// window.addEventListener('scroll', checkScrollTop)
const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 };
  return (
    <div>
     
        <ArrowIconStyle 
         onClick={scrollTop} 
        /> 
    </div>
  )
}

export default FooterArrow
const ArrowIconStyle = styled(ArrowIcon)`

cursor: pointer; 
transform: rotate(-90deg);   
position: fixed; 
bottom: 20px; 
right: 20px; 
`
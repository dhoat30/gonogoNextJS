import React from 'react'
import Header from './UI/Header/Header'
function Layout(props) {
  return (
    <div>
      <Header></Header>
        <div>{props.children}
     
        </div>

    <footer></footer> 
</div>
  )
}

export default Layout
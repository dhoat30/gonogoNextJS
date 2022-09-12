import React from 'react'
import Header from './UI/Header/Header'
function Layout(props) {
  return (
    <div>
      <Header logo={props.children.props.contactData && props.children.props.contactData.logo}></Header>
        <div>{props.children}
     
        </div>

    <footer></footer> 
</div>
  )
}

export default Layout
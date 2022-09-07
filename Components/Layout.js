import React from 'react'

function Layout(props) {
  return (
    <div>
    <header></header>
        <div>{props.children}
        <div>hello</div>
        </div>

    <footer></footer> 
</div>
  )
}

export default Layout
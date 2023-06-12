/*
Using 'REact router' library in our app allows us to navigate between different pages or components in  React , and actually makes these changes to   URL of each page or component

React Router isn't installed with 'create-react-app' by default, so you will need to install it before start using it 


npm i react-router-dom

The 'Link'  component is used to navigate the different rtoutes on the 'NavLInk' is used to add the style attriutes to the active rutes

'LInk does not recognize the 'activeclassName'
*/

import { NavLink,Link } from "react-router-dom"
function Header(props) {
    return (
  <header>
          <div class="container flexbox">
            <div className="title">
              <h1>
                {props.title}
              </h1>
            </div>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/documentation">Documentation</Link></li>
                <li><NavLink className={navData => (navData.isActive? "active": "")} to="/tutorials">Tutorial</NavLink></li>
                {/*Using object destructing */}

                <li><NavLink className={({isActive}) => (isActive? "active": "")} to="/about-us">About Us</NavLink></li>
              </ul>
            </nav>
          </div>
        </header>  )
  }
  
  export default Header
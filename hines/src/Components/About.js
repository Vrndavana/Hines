import React from 'react';
import {Link} from 'react-router-dom';
import {Nav} from '../Components/styled';


function About() {

return(
  <div>
           <Nav>
             <Link to='/'>           HOME       </Link>
             <Link to='/Skills'>     SKILLS     </Link>
             <Link to='/Experience'> EXPERIENCE </Link>
             <Link to='/About'>      ABOUT      </Link>
           </Nav>
    
    
    
   <div class='Home-Div'>
     <div>
        <h1 class='Hello'> "About Section Under Construction" </h1>
        <h3> Welcome to my Software Engineer Portfolio. </h3>
        <p>Please remember to equipt your hard hat!</p>
        <h4>This Site Is Under Construction</h4>    
      </div>
   </div>

  </div>
)}
    
export default About;
import React from 'react';
import {Link} from 'react-router-dom';
import {Nav} from '../Components/styled';


function About() {

return(
  <div>
      <Nav>
        <Link to='/' id="asd">            HOME          </Link>
        <Link to='/Skills' id="asd">      SKILLS          </Link>
        <Link to='/Experience' id="asd">  EXPERIENCE      </Link>
        <Link to='/About' id="sasd">       ABOUT           </Link>
      </Nav>
    
    
    
   <div class='Home-Div'>
     <div>
        <h1 class='Hello'> ABOUT </h1>
        <h3> A little about me. </h3>
        <p> Working on this section</p>
        <h4>This Site Is Under Construction</h4>    
      </div>
   </div>

  </div>
)}
    
export default About;
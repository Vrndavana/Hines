import React from 'react';
import {Link} from 'react-router-dom';
import {Nav} from '../Components/styled';


function About() {

return(
  <div>
      <Nav>
        <Link to='/' >           <a href="" id="asd"> HOME      </a>      </Link>
        <Link to='/Skills'>      <a href="" id="asd">SKILLS     </a>      </Link>
        <Link to='/Experience'>  <a href="" id="asd">EXPERIENCE </a>      </Link>
        <Link to='/About'>       <a href="" id="sasd">ABOUT      </a>      </Link>
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
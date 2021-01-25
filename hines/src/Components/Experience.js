import React from 'react';

import {Link} from 'react-router-dom';
import {Nav} from '../Components/styled';


function Experience() {

  return(
    <div>
      <Nav>
        <Link to='/' >           <a id="asd"> HOME      </a>      </Link>
        <Link to='/Skills'>      <a id="asd">SKILLS     </a>      </Link>
        <Link to='/Experience'>  <a id="sasd">EXPERIENCE </a>      </Link>
        <Link to='/About'>       <a id="asd">ABOUT      </a>      </Link>
      </Nav>
      
      
      
     <div class='Home-Div'>
       <div>
          <h1 class='Hello'> "Experience Section Coming Soon" </h1>
          <h3> Welcome to my Software Engineer Portfolio. </h3>
          <p>Please remember to equipt your hard hat!</p>
          <h4>This Site Is Under Construction</h4>    
        </div>
     </div>
  
    </div>
  )}
    
    export default Experience;
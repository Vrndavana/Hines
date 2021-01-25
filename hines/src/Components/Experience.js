import React from 'react';

import {Link} from 'react-router-dom';
import {Nav} from '../Components/styled';


function Experience() {

  return(
    <div>
      <Nav>
        <Link to='/' id="asd">        HOME          </Link>
        <Link to='/Skills'id="asd">    SKILLS           </Link>
        <Link to='/Experience' id="sasd">  EXPERIENCE       </Link>
        <Link to='/About' id="asd">      ABOUT            </Link>
      </Nav>
      
      
      
     <div class='Home'>
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
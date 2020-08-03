import React from 'react';

import {Link} from 'react-router-dom';
import {Nav} from '../Components/styled';


function Projects() {
return(
    <div>
    <Nav>
     <Link to='/'> Home </Link>
     <Link to='/Skills'> Skills </Link>
     <Link to='/Experience'>Experience </Link>
     
    </Nav>



    <div class='Home-Div'>
        <div>
          <h1 class='Hello'> "Hello World" </h1>
          <h3> Welcome to my Software Engineer Portfolio. </h3>
          <p>Please remember to equipt your hard hat!</p>
          <h4>This Site Is Under Construction</h4>
        
        </div>
    </div>

</div>
)}

export default Projects;
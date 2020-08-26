import React from 'react';
import {Sidebar} from '../Components/Sidebar';
import {Link} from 'react-router-dom';
import {Nav} from '../Components/styled';


function Skills() {
  return(
    <div>

     <Nav>
     <Link to='/'>           HOME       </Link>
     <Link to='/Skills'>     SKILLS     </Link>
     <Link to='/Experience'> EXPERIENCE </Link>
     <Link to='/About'>      ABOUT      </Link>
     </Nav>

 
      
      
      <div class='Skill-Div'>
 
        <Sidebar width={200} height={"100vh"}>
        <button class="Side-Button">  <a href="#Software">         Software    </a> </button>
        <button class="Side-Button">  <a href="#Front-End">        Front-End   </a> </button>
        <button class="Side-Button">  <a href="#Back-End">         Back-End    </a> </button>
        <button class="Side-Button">  <a href="#Audio">            Audio       </a> </button>
        <button class="Side-Button">  <a href="#Hardware">         Hardware    </a> </button>
        </Sidebar>


        <div class="S-Info">

          <div class="Sdiv">
           <h1 class='Skillz'> <a id="Software"> Software </a> </h1>
           <h3> Welcome to my Software Engineer Portfolio. </h3>
           <p>Please remember to equipt your hard hat!</p>
           <h4>This Site Is Under Construction</h4>    
          </div>

          <div class="Sdiv">
           <h1 class='Skillz'> <a id="Front-End"> Front-End </a> </h1>
           <h3> Welcome to my Software Engineer Portfolio. </h3>
           <p>Please remember to equipt your hard hat!</p>
           <h4>This Site Is Under Construction</h4>    
          </div>

          <div class="Sdiv">
           <h1 class='Skillz'> <a id="Back-End"> Back-End </a> </h1>
           <h3> Welcome to my Software Engineer Portfolio. </h3>
           <p>Please remember to equipt your hard hat!</p>
           <h4>This Site Is Under Construction</h4>    
          </div>

          <div class="Sdiv">
           <h1 class='Skillz'> <a id="Audio"> Audio </a> </h1>
           <h3> Welcome to my Software Engineer Portfolio. </h3>
           <p>Please remember to equipt your hard hat!</p>
           <h4>This Site Is Under Construction</h4>    
          </div>

          <div class="Sdiv">
           <h1 class='Skillz'> <a id="Hardware"> Hardware </a> </h1>
           <h3> Welcome to my Software Engineer Portfolio. </h3>
           <p>Please remember to equipt your hard hat!</p>
           <h4>This Site Is Under Construction</h4>    
          </div>
         
        </div>


      </div>
  
    </div>
  )}

export default Skills;
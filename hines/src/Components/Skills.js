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


        <div class="Sm">
          <Sidebar width={200} height={"100vh"}>
          <button class="Side-Button">  <a href="#Software">         Software    </a> </button>
          <button class="Side-Button">  <a href="#Front-End">        Front-End   </a> </button>
          <button class="Side-Button">  <a href="#Back-End">         Back-End    </a> </button>
          <button class="Side-Button">  <a href="#Audio">            Audio       </a> </button>
          <button class="Side-Button">  <a href="#Hardware">         Hardware    </a> </button>
          </Sidebar>
        </div>

        <div class="S-Info">

          <div class="Sdiv">
           <h1 class='Skillz'> <a id="Software" href="Software"> Software </a> </h1>
           <h3> JavaScript, Python, and More   </h3>
           <p class="Sp">  In the more recent years I have spent my time honing the skills of computer technologies such as JavaScript and Python to create websites, apps, databases, and games. 
                In my earlier years I've focused much of my time to learning audio, video, editting and graphic work; Seeing my passions continiously bring me to working in D.Ws  (Digital Workstations)
                  a path in software came naturally as my curiosity of how these softwares I worked in for years, worked.   </p>
           <p> Here you can find a collection of things I work on</p>       
           <h4> Links and display underconstruction </h4>    
          </div>

          <div class="Sdiv">
           <h1 class='Skillz'> <a id="Front-End" href="Front-End"> Front-End </a> </h1>
           <h3> Welcome to my Software Engineer Portfolio. </h3>
           <p>Please remember to equipt your hard hat!</p>
           <h4> Links and display underconstruction </h4>    
          </div>

          <div class="Sdiv">
           <h1 class='Skillz'> <a id="Back-End" href="Back-End"> Back-End </a> </h1>
           <h3> Welcome to my Software Engineer Portfolio. </h3>
           <p>Please remember to equipt your hard hat!</p>
           <h4> Links and display underconstruction </h4>       
          </div>

          <div class="Sdiv">
           <h1 class='Skillz'> <a id="Audio" href="Audio"> Audio </a> </h1>
           <h3> Welcome to my Software Engineer Portfolio. </h3>
           <p>Please remember to equipt your hard hat!</p>
           <h4> Links and display underconstruction </h4>       
          </div>

          <div class="Sdiv">
           <h1 class='Skillz'> <a id="Hardware" href="Hardware"> Hardware </a> </h1>
           <h3> Welcome to my Software Engineer Portfolio. </h3>
           <p>Please remember to equipt your hard hat!</p>
           <h4> Links and display underconstruction </h4>        
          </div>
         
        </div>


      </div>
  
    </div>
  )}

export default Skills;
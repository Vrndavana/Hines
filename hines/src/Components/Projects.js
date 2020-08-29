import React from 'react';
import {Link} from 'react-router-dom';
import {Nav} from '../Components/styled';
import Proj1 from '../Images/Proj1.png';
import Proj2 from '../Images/Proj2.png';
import Proj3 from '../Images/Proj3.png';
function Projects() {

return(
<div>

<Nav>
             <Link to='/'>           HOME       </Link>
             <Link to='/Skills'>     SKILLS     </Link>
             <Link to='/Experience'> EXPERIENCE </Link>
             <Link to='/About'>      ABOUT      </Link>
           </Nav>



  <div class='Proj-Div'>
    
 
    <div class="Flex">

    <div class='Proj'>
      <img src={Proj1} alt="Game of Life" className='Pix'/>
      <div class="ProjI">
       <h1> "Game of Life" </h1>
       <h3> Welcome to my Software Engineer Portfolio. </h3>
       <p>Please remember to equipt your hard hat!</p>

      </div>
    </div>

    <div class='Proj'>
      <img src={Proj2} alt="Game of Life" className='Pix'/>
      <div class="ProjI">
       <h1> "Game of Life" </h1>
       <h3> Welcome to my Software Engineer Portfolio. </h3>
       <p>Please remember to equipt your hard hat!</p>

      </div>
    </div>

    <div class='Proj'>
      <img src={Proj3} alt="Game of Life" className='Pix'/>
      <div class="ProjI">
       <h1> "Game of Life" </h1>
       <h3> Welcome to my Software Engineer Portfolio. </h3>
       <p>Please remember to equipt your hard hat!</p>

      </div>
    </div>

    <div class='Proj'>
      <img src={Proj1} alt="Game of Life" className='Pix'/>
      <div class="ProjI">
       <h1> "Game of Life" </h1>
       <h3> Welcome to my Software Engineer Portfolio. </h3>
       <p>Please remember to equipt your hard hat!</p>

      </div>
    </div>

    <div class='Proj'>
      <img src={Proj2} alt="Game of Life" className='Pix'/>
      <div class="ProjI">
       <h1> "Game of Life" </h1>
       <h3> Welcome to my Software Engineer Portfolio. </h3>
       <p>Please remember to equipt your hard hat!</p>

      </div>
    </div>

    <div class='Proj'>
      <img src={Proj3} alt="Game of Life" className='Pix'/>
      <div class="ProjI">
       <h1> "Game of Life" </h1>
       <h3> Welcome to my Software Engineer Portfolio. </h3>
       <p>Please remember to equipt your hard hat!</p>

      </div>
    </div>

    </div>



  </div>

</div>
)}

export default Projects;
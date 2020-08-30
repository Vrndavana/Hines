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
       <h2 class="ProjIH"> Game of Life </h2>
       <span> JS | HTML | CSS </span>
       <p> Welcome to my Software Engineer Portfolio.
         Welcome to my Software Engineer Portfolio.
         Welcome to my Software Engineer Portfolio. 
         Welcome to my Software Engineer Portfolio.
         Welcome to my Software Engineer Portfolio</p>
       <section class ="Proj-Buttons"> 
        <button> Github </button>
        <button> Learn More </button>
        <button> Visit Site </button>  
       </section>
      </div>
    </div>

    <div class='Proj'>
      <img src={Proj2} alt="Game of Life" className='Pix'/>
      <div class="ProjI">
       <h2 class="ProjIH"> Game of Life </h2>
       <span> JS | HTML | CSS </span>
       <p> Welcome to my Software Engineer Portfolio.
         Welcome to my Software Engineer Portfolio.
         Welcome to my Software Engineer Portfolio. 
         Welcome to my Software Engineer Portfolio.
         Welcome to my Software Engineer Portfolio</p>
       <section class ="Proj-Buttons"> 
        <button> Github </button>
        <button> Learn More </button>
        <button> Visit Site </button>  
       </section>
      </div>
    </div>

    <div class='Proj'>
      <img src={Proj3} alt="Game of Life" className='Pix'/>
      <div class="ProjI">
       <h2 class="ProjIH"> Game of Life </h2>
       <span> JS | HTML | CSS </span>
       <p> Welcome to my Software Engineer Portfolio.
         Welcome to my Software Engineer Portfolio.
         Welcome to my Software Engineer Portfolio. 
         Welcome to my Software Engineer Portfolio.
         Welcome to my Software Engineer Portfolio</p>
       <section class ="Proj-Buttons"> 
        <button> Github </button>
        <button> Learn More </button>
        <button> Visit Site </button>  
       </section>
      </div>
    </div>

    <div class='Proj'>
      <img src={Proj1} alt="Game of Life" className='Pix'/>
      <div class="ProjI">
       <h2 class="ProjIH"> Game of Life </h2>
       <span> JS | HTML | CSS </span>
       <p> Welcome to my Software Engineer Portfolio.
         Welcome to my Software Engineer Portfolio.
         Welcome to my Software Engineer Portfolio. 
         Welcome to my Software Engineer Portfolio.
         Welcome to my Software Engineer Portfolio</p>
       <section class ="Proj-Buttons"> 
        <button> Github </button>
        <button> Learn More </button>
        <button> Visit Site </button>  
       </section>
      </div>
    </div>

    <div class='Proj'>
      <img src={Proj2} alt="Game of Life" className='Pix'/>
      <div class="ProjI">
       <h2 class="ProjIH"> Game of Life </h2>
       <span> JS | HTML | CSS </span>
       <p> Welcome to my Software Engineer Portfolio.
         Welcome to my Software Engineer Portfolio.
         Welcome to my Software Engineer Portfolio.         
         Welcome to my Software Engineer Portfolio.
         Welcome to my Software Engineer Portfolio </p>
       <section class ="Proj-Buttons"> 
        <button> Github </button>
        <button> Learn More </button>
        <button> Visit Site </button>  
       </section>
      </div>
    </div>

    <div class='Proj'>
      <img src={Proj3} alt="Game of Life" className='Pix'/>
      <div class="ProjI">
       <h2 class="ProjIH"> Game of Life </h2>
       <span> JS | HTML | CSS </span>
       <p> Welcome to my Software Engineer Portfolio.
         Welcome to my Software Engineer Portfolio.         
         Welcome to my Software Engineer Portfolio.
         Welcome to my Software Engineer Portfolio
         Welcome to my Software Engineer Portfolio. </p>
       <section class ="Proj-Buttons"> 
        <button> Github </button>
        <button> Learn More </button>
        <button> Visit Site </button>  
       </section>
      </div>
    </div>



    </div>
  </div>
</div>
)}

export default Projects;
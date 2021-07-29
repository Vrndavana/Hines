import React from 'react';
// import {Link} from 'react-router-dom';
// import {Nav} from '../Components/styled';
import Proj1 from '../Images/Proj1.png';
import Proj2 from '../Images/Proj2.png';
import Proj3 from '../Images/Proj3.png';
import JRP from '../Images/JRP.png';
import Api from '../Images/Api.png';
import Match from '../Images/Match.png';
function Projects() {

return(
<div class="Projm">

      {/* <Nav>
        <Link to='/' id="asd">           HOME           </Link>
        <Link to='/Skills'id="asd">     SKILLS    </Link>
        <Link to='/Experience'id="asd"> EXPERIENCE       </Link>
        <Link to='/About'id="asd">      ABOUT           </Link>
      </Nav> */}



  <div class='Proj-Div'>
    
    <div class="Flex">



    <div class='Proj'>
      <img src={JRP} alt="JRP Electric" className='Pix'/>
      <div class="ProjI">
       <h2 class="ProjIH"> JRP Electric Inc </h2>
       <span> JS | HTML | CSS </span>
       <p> JRP Electric builds the structured wiring needed for foundations.
         This site has recently been contracted to me for updated and fixing, 
         using a combination of JavaScript and Wordpress coding.
       </p>
       <span> Checkout JRP </span>

       <section class ="Proj-Buttons"> 

  
        <a id="JrpButton" href="http://www.jrpelectric.net"> Visit JRP </a>
   

        {/* <button> Github </button>
        <button> Learn More </button>
        <button> Visit Site </button>   */}
       </section>
      </div>
    </div>




    <div class='Proj'>
      <img src={Proj1} alt="Game of Life" className='Pix'/>
      <div class="ProjI">
       <h2 class="ProjIH"> Game of Life </h2>
       <span> JS | HTML | CSS </span>
       <p> The Game of Life is actually a well known coding game challenge 
         through the coding community. This "game" is more to test ones
         skills while also giving a meaningful lesson on community, through
         the simplified simulation of life and those around us.   </p>
         <span>(Direct link under construction)</span>
       <section class ="Proj-Buttons"> 
        {/* <button> Github </button>
        <button> Learn More </button>
        <button> Visit Site </button>   */}
       </section>
      </div>
    </div>



    <div class='Proj'>
      <img src={Api} alt="Api" className='Pix'/>
      <div class="ProjI">
       <h2 class="ProjIH"> Api Connections </h2>
       <span> JS | HTML | CSS </span>
       <p> This project was an API connection objective; To test comprehension 
         on navagating a Javascript index on the other side of an API using
         only console logs to locate and identify current positions while pulling data   </p>
         <span> (Direct link under construction)</span>
       <section class ="Proj-Buttons"> 
        {/* <button> Github </button>
        <button> Learn More </button>
        <button> Visit Site </button>   */}
       </section>
      </div>
    </div>

    <div class='Proj'>
      <img src={Match} alt="Match Game" className='Pix'/>
      <div class="ProjI">
       <h2 class="ProjIH"> Emoji Match </h2>
       <span> JS | HTML | CSS </span>
       <p> Match! Match! Match Em Up! Who doesn't love Emojis :3 !!! 
         This JavaScript rendered project uses state and on click functions
         to bring you a fun and simple game </p>
         <span>(Direct link under construction)</span>
       <section class ="Proj-Buttons"> 
        {/* <button> Github </button>
        <button> Learn More </button>
        <button> Visit Site </button>   */}
       </section>
      </div>
    </div>
   <div class='Proj'>
      <img src={Proj2} alt="Game of Life" className='Pix'/>
      <div class="ProjI">
       <h2 class="ProjIH"> Bridges To Prosperity </h2>
       <span> JS | HTML | CSS </span>
       <p> B2P's Map is a project using using JavaScript and Postgres 
         to connect data from Bridges to Prosperity Api 
         to be able to track progress of contracts B2P 
         makes to construct bridges and other structures in 3rd world countries.
       </p>
       <span>(Direct link under construction)</span>
       <section class ="Proj-Buttons"> 
        {/* <button> Github </button>
        <button> Learn More </button>
        <button> Visit Site </button>   */}
       </section>
      </div>
    </div>
    <div class='Proj'>
      <img src={Proj3} alt="Game of Life" className='Pix'/>
      <div class="ProjI">
       <h2 class="ProjIH"> Plant Quencher </h2>
       <span> JS | HTML | CSS </span>
       <p> Keep track of your plants! Simple and easy! Plant Quencher 
         is a Javascript built app using authentication for login, signup
         and React components to bring a smooth and easy to follow App that 
         allows users to see water, soil, and sunlight needs of their plants.

       </p>
       <span>(Direct link under construction)</span>
       <section class ="Proj-Buttons"> 
        {/* <button> Github </button>
        <button> Learn More </button>
        <button> Visit Site </button>   */}
       </section>
      </div>
    </div>


    
 

    </div>
  </div>
</div>
)}

export default Projects;
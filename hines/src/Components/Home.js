import React from 'react';
import Me from '../Images/Me.jpg';
import {Link} from 'react-router-dom';
import {Nav} from '../Components/styled';
import Projects from '../Components/Projects';

function Home() {

    return(

        <div>
            <Nav>
             <Link to='/' id="sasd">           HOME           </Link>
             <Link to='/Skills' id="asd">      SKILLS         </Link>
             <Link to='/Experience' id="asd">  EXPERIENCE     </Link>
             <Link to='/About' id="asd">       ABOUT          </Link>
            </Nav>



            <section class='Home'>

                <img src={Me} alt="A handsome chap" className='Me'/>
                

                <div class="Base">
                <div class="BasePlate">
                 <h1 class='Hello'> "Hello World" </h1>
                 <h2>Davan Hines</h2>
                 <h3> Welcome to my Portfolio. </h3>
                 <p> Full-Stack Web Dev | Software Engineer | Tech Enthusiast </p>
                </div>


                <div class="Basebutt">
                 <button class="button">  <a href="#Basement"> <span> Head to the Basement </span> </a>  </button>
                </div>

                </div>

            </section>

            <div class="BannerB"> <h1 class="Down">Project Section</h1> </div>

            <section class='BasementFloor'>

                <div class=" PROJ">
                 <h1 id="Basement" href="Basement"> Projects </h1>  
                 <h3 id="Basement" href="Basement"> Constructing...</h3> 
                 {/* <Projects/>  */}
                </div>

            </section>


        </div>
    )}
    export default Home;
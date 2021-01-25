import React from 'react';
import Me from '../Images/Me.jpg';
import {Link} from 'react-router-dom';
import {Nav} from '../Components/styled';

function Home() {

    return(

        <div>
            <Nav>
             <Link to='/' id="sasd">           HOME           </Link>
             <Link to='/Skills' id="asd">      SKILLS         </Link>
             <Link to='/Experience' id="asd">  EXPERIENCE     </Link>
             <Link to='/About' id="asd">       ABOUT          </Link>
            </Nav>



           <div class='Home-Div'>
                <img src={Me} alt="A handsome chap" className='Me'/>
                <div class="BasePlate">
                 <h1 class='Hello'> "Hello World" </h1>
                 <h2>Davan Hines</h2>
                 <h3> Welcome to my Portfolio. </h3>
                 <p> Full-Stack Web Dev | Software Engineer | Tech Enthusiast    </p>
                    

                </div>

            </div>

        </div>
    )}
    export default Home;
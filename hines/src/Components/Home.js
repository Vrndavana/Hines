import React from 'react';
import Me from '../Images/Me.jpg';
import {Link} from 'react-router-dom';
import {Nav} from '../Components/styled';

function Home() {

    return(

        <div>
           <Nav>
             <Link to='/'>           HOME       </Link>
             <Link to='/Skills'>     SKILLS     </Link>
             <Link to='/Experience'> EXPERIENCE </Link>
             <Link to='/About'>      ABOUT      </Link>
           </Nav>



           <div class='Home-Div'>
                <img src={Me} alt="A handsome chap" className='Me'/>
                <div>
                 <h1 class='Hello'> "Hello World" </h1>
                 <h2>Dan Hines</h2>
                 <h3> Welcome to my Software Engineer Portfolio. </h3>
                 <p> Full-Stack Web Dev | Tech enthusiath   </p>

                    <button class="Project-Button">
                     <Link to='/Projects'> Projects </Link>
                    </button>
                </div>

            </div>

        </div>
    )}
    export default Home;
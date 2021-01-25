import React from 'react';
import Me from '../Images/Me.jpg';
import {Link} from 'react-router-dom';
import {Nav} from '../Components/styled';

function Home() {

    return(

        <div>
            <Nav>
             <Link to='/' >           <a id="sasd"> HOME      </a>      </Link>
             <Link to='/Skills'>      <a id="asd">SKILLS     </a>      </Link>
             <Link to='/Experience'>  <a id="asd">EXPERIENCE </a>      </Link>
             <Link to='/About'>       <a id="asd">ABOUT      </a>      </Link>
            </Nav>



           <div class='Home-Div'>
                <img src={Me} alt="A handsome chap" className='Me'/>
                <div>
                 <h1 class='Hello'> "Hello World" </h1>
                 <h2>Dan Hines</h2>
                 <h3> Welcome to my Portfolio. </h3>
                 <p> Full-Stack Web Dev | Software Engineer | Tech Enthusiast    </p>


                     {/* Projects inprogress uncomment lataer for public view */}

                    {/* <button class="Project-Button">
                     <Link to='/Projects'> Projects </Link>
                    </button> */}
                </div>

            </div>

        </div>
    )}
    export default Home;
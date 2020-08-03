import React from 'react';
import Me from '../Images/Me.jpg';
import {Link} from 'react-router-dom';
import {Nav} from '../Components/styled';

function Home() {

    return(

        <div>
           <Nav>
             <Link to='/Skills'> Skills</Link>
             <Link to='/Experience'>Experience </Link>
             <Link to='/About'>About</Link>
           </Nav>



           <div class='Home-Div'>
                <img src={Me} alt="A handsome chap" className='Me'/>
                <div>
                 <h1 class='Hello'> "Hello World" </h1>
                 <h3> Welcome to my Software Engineer Portfolio. </h3>
                 <p>Please remember to equipt your hard hat!</p>

                    <button class="Project-Button">
                     <Link to='/Projects'> Projects </Link>
                    </button>
                </div>

            </div>

        </div>
    )}
    export default Home;
import React from 'react';
import Me from '../Images/Me.jpg';



function Home() {

    return(
        <div class='Home-Div'>
              <img src={Me} alt="A handsome chap" className='Me'/>
              <div>
              <h1 class='Hello'> "Hello World" </h1>
              <h3> Website currently under construction. </h3>
              <p>Please remember to equipt your hard hat!</p>
              
             </div>
        </div>
        
    )}
    export default Home;
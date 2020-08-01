import React from 'react';
import './App.css';
import {BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import About from './Components/About';

// Styles
import {Nav} from './Components/styled'


// Default Page - Home Componant = Path='/' 
// Application logic
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav>
         <Link to='/Skills'> Skills</Link>
         <Link to='/Experience'>Experience </Link>
         <Link to='/About'>About</Link>
        </Nav>


        <Switch> 
          <Route exact path='/'>                <Home/>           </Route>       
          <Route exact path='/Skills'>          <Skills/>         </Route>   
          <Route exact path='/Experience'>      <Experience/>     </Route>
          <Route exact path='/About'>           <About/>          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}
export default App;
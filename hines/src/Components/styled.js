import styled from 'styled-components';



// Navigation Bar 
// Go to App.css for color grade part to switch the color your want easier.

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: rgba(86,80,73);
  border-bottom:3px solid black;
  color: white;
  padding: 1% 20%;
  a {
    font-family: 'Roboto Slab', serif;
    margin: 1% 2%;
    text-decoration: none;
    color: white;
    font-size: 1.7rem;
  }
`;

export const NavCol = styled.nav`
  position: relative;
  display: flex;
  flex-direction:column;
  width:1%;
  height:100vh;
  justify-content: space-around;
  background-color:#aaa7a7bb;
  color: white;
  padding: 0 8% 0 2%;
  z-index: 999;
  a {
    font-family: 'Roboto Slab', serif;
    margin: 1% 0%;
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
  }
`;

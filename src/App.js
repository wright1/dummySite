import React, { createRef } from 'react';
import GlobalStyles from './components/style/globalstyle'
import Button from "./components/menuBtn"
import Nav from './components/nav'
import burger from "./images/menuBtn.png"


function App() {

  const tag = createRef();

  
  const closePanel = () => {

    tag.current.style.width = "0";

  }

  const openPanel = () => {

    tag.current.style.width = "40vw"
  }


  return (

    <>
    <GlobalStyles />

    <Button pic={ burger}  onClick={ openPanel }/>
    <Nav  ref={tag} onClick={ closePanel }/>
    
    </>
    
  );
}

export default App;

import React, { createRef } from 'react';
import GlobalStyles from './components/style/globalstyle'
import Nav from './components/nav'


function App() {

  const tag = createRef();

  

  const closePanel = () => {

    tag.current.style.width = "0";



  }


  return (

    <>
    <GlobalStyles />
    <Nav  ref={tag} onClick={ closePanel }/>
    
    </>
    
  );
}

export default App;

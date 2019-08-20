import styled, { createGlobalStyle } from "styled-components"
import spain from "../../images/spain1.jpg" 

const GlobalStyles = createGlobalStyle`
html{
    height: 100%;
}
body{
    min-height: 100%;
    margin: 0;
    padding: 0;
    background-image: url(${ spain });
    background-size: cover;
    background-position: center;
}
`
//Photo by Camille / Kmile on Unsplash



export default GlobalStyles
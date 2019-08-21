import React from "react"
import styled from "styled-components"

const NavDiv = styled.div`
height: 100vh;
width: 0vw;
position: fixed;
left: 0;
top:0;
background-color: rgba(0, 0, 0, 0.8);
transition: 0.5s;
> a{
    text-decoration: none;
    color: #fff;
    position: absolute;
    top: 5vh;
    right: 5vw;
    font-size: 2em;
}
}
`

const NavContent = styled.div`
position: relative;
top: 25vh;
text-align: center;
overflow: hidden;
> a{
    padding: 2vw;
    text-decoration: none;
    font-family:  'Arsenal', sans-serif;
    font-size: 1.5em;
    color: #fff;
    display: block;

}
a:hover{
    color: green;
}
`


const Nav = React.forwardRef(({ onClick}, ref) => {

    return(


<NavDiv ref={ ref } id="nav" >

 {/* Button to close the overlay naviation  */}
<a href="#" onClick={() => onClick()}>&times;</a>

{/* overlay content */} 
<NavContent>
    <a href="#">about</a>
    <a href="#">services</a>
    <a href="#">prices</a>
    <a href="#">contact</a> 
</NavContent>



</NavDiv>


    )})

export default Nav
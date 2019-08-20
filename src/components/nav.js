import React from "react"
import styled from "styled-components"

const NavDiv = styled.div`
height: 100vh;
width: 0vw;
position: fixed;
left: 0;
top:0;
background-color: rgba(0, 0, 0, 0.4);
> a{
    text-decoration: none;
    position: absolute;
    top: 5vh;
    right: 5vw;
    font-size: 1.8em;
}
> div{
    position: relative;
    top: 25vh;
    text-align: center;
    overflow: hidden;
     > a{
          padding: 2vw;
          text-decoration: none;
          font-size: 1.3em;
          color: red;
          display: block;
          

}
a:hover{
    color: green;
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
    font-size: 1.3em;
    color: red;
    display: block;

}
a:hover{
    color: green;
}
`


const Nav = ({ onClick }) => {
    return(


<NavDiv id="nav" >

 {/* Button to close the overlay naviation  */}
<a href="#" className="closebtn" onClick={() => onClick()}>&times;</a>

{/* overlay content */}
<NavContent>
    <a href="#">about</a>
    <a href="#">services</a>
    <a href="#">prices</a>
    <a href="#">contact</a> 
</NavContent>



</NavDiv>


    )}

export default Nav
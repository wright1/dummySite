import React from "react"
import styled from "styled-components"

const Nav = ({ onClick }) => {


<div id="nav"   className="overlay">

 {/* Button to close the overlay naviation  */}
<a href="#" className="closebtn" onClick={onClick()}>&times;</a>

{/* overlay content */}
<div>
    <a href="#">about</a>
    <a href="#">services</a>
    <a href="#">prices</a>
    <a href="#">contact</a> 
</div>



</div>


}
import React from "react"
import styled from "styled-components"


const Button = styled.button`
position: absolute;
top: 5vh;
left: 5vw;
border: solid 1px transparent;
border-radius: 3px;
background-color: rgba(0, 0, 0, 0.2);
outline: none;
`


const openBtn = ({ onClick, pic }) => {
    return(
        <Button >
        <img src={pic} alt="menu button" onClick={ () => onClick() } />
        </Button>
    )
}

export default openBtn
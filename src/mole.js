import React, {useEffect} from 'react'
import MoleImage from './RR-React-A-Mole-Images/mole.png'


function Mole(props){

useEffect(()=>{
    let seconds = Math.ceil(Math.random()*10000)
    let timer = setTimeout(()=>{
        props.toggle(false)
    }, seconds)
    return () => clearTimeout(timer)
}) 
    return(
        <div>
            <img src={MoleImage} style={{'width': '30vw'}} onClick={props.handleScore}/>
        </div>
    )
}

export default Mole
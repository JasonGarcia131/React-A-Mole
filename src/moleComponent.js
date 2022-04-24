import React, {useState} from 'react'
import Mole from './mole.js'
import EmptySlot from './emptySlot.js'

function MoleComponent(props){
 let [above, setAbove] = useState(false)

  const handleScore = (e) => {props.setScore(props.score + 1); setAbove(false)}


let displayMole = above ? <Mole setScore = {props.setScore} toggle = {setAbove} handleScore = {handleScore}/> : <EmptySlot toggle = {setAbove}/>

    return(

        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>

    )

}

export default MoleComponent
import { useState } from 'react'
import './Question.css'

function Question(props){
    return(
        <>
            <div className="testBox">
                <h1><center>{props.Q}</center></h1>
                <div className="checkBox">
                        <h2>{props.L}</h2>
                        <div className="radios">
                            <input type="radio" name={props.name} id="" value="2" className="two leftMargin"/>
                            <input type="radio" name={props.name} id="" value="1" className="one"/>
                            <input type="radio" name={props.name} id="" value="0" className="zero"/>
                            <input type="radio" name={props.name} id="" value="-1" className="nOne"/>
                            <input type="radio" name={props.name} id="" value="-2" className="nTwo rightMargin" />
                        </div>
                      <h2>{props.R}</h2>
                </div>
            </div>
            <div className="line"></div>
        </>
    )
}


export default Question
